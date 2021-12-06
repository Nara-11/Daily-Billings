import recordListModel from '@/models/recordListModel';
import labelListModel from '@/models/labelListModel';

// type Store = {
//   recordList: ()
//   createRecord: (record: RecordItem) => void
//   labelList: () => void
//   createLabel: (name: string) => void
//   removeLabel: (id: string) => void
// }

const store={
  //record store
  recordList: recordListModel.fetch(),
  createRecord(record: RecordItem):void {
    recordListModel.create(record);
  },

//label store
  labelList: labelListModel.fetch(),
  createLabel(name: string) :void{
    const message = labelListModel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  },
  removeLabel(id: string) :void{
    labelListModel.remove(id);
  }
};

export default store;