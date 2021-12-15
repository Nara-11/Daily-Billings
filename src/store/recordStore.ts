const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() :RecordItem[]{
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.recordList;
  },
  clone(data: RecordItem[] | RecordItem): RecordItem {
    return JSON.parse(JSON.stringify((data)));
  },
  createRecord(record: RecordItem): void {
    const record2 = recordStore.clone(record);
    record2.dates = new Date().toISOString();
    this.recordList?.push(record2);
    recordStore.saveRecords();
  },
  saveRecords() :void{
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
};
recordStore.fetchRecords();

export default recordStore