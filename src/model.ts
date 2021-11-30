const localStorageKeyName = 'recordList';
const model = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clone(data: RecordItem[] | RecordItem){
    return JSON.parse(JSON.stringify((data)));
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fetch(){
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },
  save(data: RecordItem[]): void {
    return window.localStorage.setItem('recordList', JSON.stringify(data));
  }
};

export default model;