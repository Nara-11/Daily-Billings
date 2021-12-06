import labelListModel from '@/models/labelListModel';

export default {
  labelList: labelListModel.fetch(),
  createLabel(name: string): void {
    const message = labelListModel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复');
    } else if (message === 'success') {
      window.alert('添加成功');
    }
  },
  removeLabel(id: string): void {
    labelListModel.remove(id);
  }
};