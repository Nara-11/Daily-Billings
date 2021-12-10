import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/createId';
import clone from '@/lib/clone';
import {outputLabelsList, inputLabelList} from '@/constants/labelsList';

Vue.use(Vuex);

type RootState = {
  recordList: RecordItem[],
  labelList: Label[],
  currentLabel?: Label,
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    labelList: [],
    currentLabel: undefined,
  } as RootState,
  mutations: {
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.dates = new Date().toLocaleDateString();
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    saveRecords(state): void {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchLabels(state) {
      state.labelList = JSON.parse(window.localStorage.getItem('labelList') || '[]');
      if (!state.labelList || state.labelList.length === 0) {
        for (let i = 0; i < outputLabelsList.length; i++) {
          store.commit('createLabel', {name: outputLabelsList[i], type:  '-'});
        }
        for (let i = 0; i < inputLabelList.length; i++) {
          store.commit('createLabel', {name: inputLabelList[i], type:  '+'});
        }
      }
    },
    createLabel(state, config: {name: string, type: "+" | "-"}) {
      const { name, type } = config
      const names = state.labelList.filter(e => e.type === type).map(item => item.name);
      const id = createId().toString();
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复');
      } else {
        state.labelList.push({id, name, type});
        store.commit('saveLabels');
      }
    },
    saveLabels(state) {
      window.localStorage.setItem('labelList', JSON.stringify(state.labelList));
    },
    removeLabel(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.labelList.length; i++) {
        if (state.labelList[i].id === id) {
          index = i;
          break;
        }
      }
      state.labelList.splice(index, 1);
      store.commit('saveLabels');
    },
  },
  actions: {},
  modules: {}
});

export default store;
