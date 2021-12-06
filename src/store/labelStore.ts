import createId from '@/lib/createId';

const localStorageKeyName = 'labelList';
const labelStore = {
  labelList: [] as Label[],
  fetchLabels() :Label[]{
    this.labelList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.labelList;
  },
  createLabel(name: string) :string{
    const names = this.labelList.map(item => item.name);
    const id = createId().toString();
    if (names.indexOf(name) >= 0) {
      window.alert('标签名重复');
      return 'duplicated';
    } else {
      this.labelList.push({id, name: name});
      this.saveLabels();
      window.alert('添加成功');
      return 'success';
    }
  },
  removeLabel(id: string): void {
    let index = -1;
    for (let i = 0; i < this.labelList.length; i++) {
      if (this.labelList[i].id === id) {
        index = i;
        break;
      }
    }
    this.labelList.splice(index, 1);
    this.saveLabels();
  },
  saveLabels(): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.labelList));
  }
};

labelStore.fetchLabels();

export default labelStore;