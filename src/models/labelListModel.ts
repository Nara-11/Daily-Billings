import createId from '@/lib/createId';

const localStorageKeyName = 'labelList';
type Label = {
  id: string;
  name: string;
}
type LabelListModel = {
  data: Label[]
  fetch: () => Label[]
  create: (name: string) => 'success' | 'duplicated'
  save: () => void
  remove: (id: string) => void
}
const labelListModel: LabelListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  create(name: string) {
    const names = this.data.map(item => item.name);
    const id=createId().toString();
    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    } else {
      this.data.push({id, name: name});
      this.save();
      return 'success';
    }
  },
  remove(id: string) {
    let index=-1;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].id===id){
        index=i;
        break;
      }
    }
    this.data.splice(index,1);
    this.save();
  }
};

export default labelListModel;