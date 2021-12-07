import Vue from 'vue';
import Vuex from 'vuex';
import createId from '@/lib/createId';
import clone from '@/lib/clone';

Vue.use(Vuex);

type RootState = {
  recordList: RecordItem[],
  labelList: Label[],
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    labelList: [],
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
    },
    createLabel(state, name: string) {
      const names = state.labelList.map(item => item.name);
      const id = createId().toString();
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复');
      } else {
        state.labelList.push({id, name: name});
        store.commit('saveLabels');
        window.alert('添加成功');
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
