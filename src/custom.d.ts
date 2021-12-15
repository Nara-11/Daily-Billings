type RootState = {
  recordList: RecordItem[]
  labelList: Label[]
  currentLabel?: Label
}

type RecordItem = {
  icons: Label[]
  notes: string
  types: string
  amounts: number
  dates: string
}

type Label = {
  id: string;
  name: string;
  type: '+' | '-';
}

type LabelListModel = {
  data: Label[]
  fetch: () => Label[]
  create: (name: string) => 'success' | 'duplicated'
  save: () => void
  remove: (id: string) => void
}