import Pokemon from "../models/pokemon"

export const setLocalStorage = (key: string, value: Pokemon[]) => {
  localStorage.setItem(key, JSON.stringify(value));
}