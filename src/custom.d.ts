type RootState = {
  recordList: RecordItem[]
  labelList: Label[]
  currentLabel?: Label
}

type RecordItem = {
  index: string;
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
  svg: string;
}

type LabelListModel = {
  data: Label[]
  fetch: () => Label[]
  create: (name: string) => 'success' | 'duplicated'
  save: () => void
  remove: (id: string) => void
}