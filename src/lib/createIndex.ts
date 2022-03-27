let index:number = parseInt(window.localStorage.getItem('indexMax')||'0') ||0;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function createIndex() {
  index++;
  window.localStorage.setItem('indexMax',index.toString())
  return index;
}

export default createIndex