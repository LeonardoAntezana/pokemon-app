export const getLocalStorage = (key: string, defaultValue: []) => {
  let value = localStorage.getItem(key);
  if(value){
    return JSON.parse(value)
  }
  else{
    return defaultValue
  }
}