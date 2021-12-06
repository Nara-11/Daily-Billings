const localStorageKeyName = 'recordList';
type RecordListModel = {
  data: RecordItem[]
  clone: (data: RecordItem[] | RecordItem) => RecordItem
  create: (record: RecordItem) => void
  fetch: () => RecordItem[]
  save: () => void
}
const recordListModel: RecordListModel = {
  data: [],

  clone(data): RecordItem {
    return JSON.parse(JSON.stringify((data)));
  },
  create(record) {
    const record2 = this.clone(record);
    record2.dates = (new Date()).toLocaleDateString();
    this.data.push(record2);
    this.save();
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default recordListModel;