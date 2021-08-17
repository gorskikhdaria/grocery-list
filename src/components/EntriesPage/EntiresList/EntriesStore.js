import createStore from '../../../utils/createStore';
import {
  getEntriesFromLocalStorage,
  setEntryToLocalStorage,
} from '../../../utils/localStorage';
import { v4 as uuid } from 'uuid';

const EntriesActions = {
  AddEntry: 'ADD_ENTRY',
  EditEntry: 'EDIT_ENTRY',
};

const initialState = {
  entries: getEntriesFromLocalStorage(),
};

const reducer = (currentState, action) => {
  const newState = { ...currentState };
  switch (action.type) {
    case EntriesActions.AddEntry:
      const newEntry = { ...action.payload.entry, id: uuid() };
      newState.entries = [newEntry, ...currentState.entries];
      setEntryToLocalStorage(newEntry);
      return newState;
    case EntriesActions.EditEntry:
      const existingEntry = currentState.entries.find(
        ({ id }) => id === action.payload.entry.id
      );
      existingEntry.name = action.payload.entry.name;
      existingEntry.isAvailable = action.payload.entry.isAvailable;
      setEntryToLocalStorage(existingEntry);
      return newState;
    default:
      return currentState;
  }
};

const [EntriesContext, EntriesProvider] = createStore(reducer, initialState);

export { EntriesContext, EntriesProvider, EntriesActions };
