import { LocalStorageEntriesKey } from '../const';
import { v4 as uuid } from 'uuid';

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

export const setEntryToLocalStorage = (entry) => {
  const existingEntries = getLocalStorageValue(LocalStorageEntriesKey) || [];
  existingEntries.unshift({ ...entry, id: uuid() });
  setLocalStorageValue(LocalStorageEntriesKey, existingEntries);
};

export const getEntriesFromLocalStorage = () => {
  return getLocalStorageValue(LocalStorageEntriesKey);
};
