import { LocalStorageEntriesKey } from '../const';

export const getLocalStorageValue = (key) => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    return null;
  }
};

export const setLocalStorageValue = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const setEntriesToLocalStorage = (entries) => {
  setLocalStorageValue(LocalStorageEntriesKey, entries);
};

export const getEntriesFromLocalStorage = () => {
  return getLocalStorageValue(LocalStorageEntriesKey) || [];
};
