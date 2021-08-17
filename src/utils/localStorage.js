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

export const setEntryToLocalStorage = (entry) => {
  const existingEntries = getLocalStorageValue(LocalStorageEntriesKey) || [];
  const existingEntry = existingEntries.find(({ id }) => id === entry.id);
  if (existingEntry) {
    existingEntry.name = entry.name;
    existingEntry.isAvailable = entry.isAvailable;
  } else {
    existingEntries.unshift(entry);
  }
  setLocalStorageValue(LocalStorageEntriesKey, existingEntries);
};

export const getEntriesFromLocalStorage = () => {
  return getLocalStorageValue(LocalStorageEntriesKey) || [];
};
