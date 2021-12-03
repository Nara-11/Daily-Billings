type RecordItem = {
  icons: string[]
  notes: string
  types: string
  amounts: number
  dates: string
}

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

interface Window {
  labelList: Label[];
  createLabel:(name:string)=>void
}