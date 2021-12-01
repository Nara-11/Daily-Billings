const localStorageKeyName = 'labelList';
type Label={
  id:string;
  name:string;
}
type LabelListModel = {
  data: Label[]
  fetch: () => Label[]
  create: (name: string) => 'success'|'duplicated'
  save: () => void
}
const labelListModel: LabelListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name: string) {
    const names=this.data.map(item=>item.name)
    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    } else {
      this.data.push({id:name,name:name});
      this.save();
      return 'success';
    }
  },
  save() {
    window.localStorage.setItem('recordList', JSON.stringify(this.data));
  }
};

export default labelListModel;