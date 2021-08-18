import createStore from '../../../utils/createStore';
import {
  getEntriesFromLocalStorage,
  setEntriesToLocalStorage,
} from '../../../utils/localStorage';
import { v4 as uuid } from 'uuid';
import { sortEntries } from '../../../utils/entries';

const EntriesActions = {
  AddEntry: 'ADD_ENTRY',
  EditEntry: 'EDIT_ENTRY',
  DeleteEntry: 'DELETE_ENTRY',
  SetStatusFilter: 'SET_STATUS_FILTER',
};

const initialState = {
  entries: getEntriesFromLocalStorage(),
  filters: [],
};

const setEntries = (newState, entries) => {
  newState.entries = entries;
  setEntriesToLocalStorage(entries);
};

const reducer = (currentState, action) => {
  const newState = { ...currentState };
  switch (action.type) {
    case EntriesActions.SetStatusFilter:
      newState.statusFilter = action.payload.filter;
      return newState;
    case EntriesActions.AddEntry:
      setEntries(
        newState,
        sortEntries([
          { ...action.payload.entry, id: uuid() },
          ...currentState.entries,
        ])
      );
      return newState;
    case EntriesActions.EditEntry:
      const currentStateEntries = [...currentState.entries];
      const existingEntry = currentStateEntries.find(
        ({ id }) => id === action.payload.entry.id
      );
      existingEntry.name = action.payload.entry.name;
      existingEntry.isAvailable = action.payload.entry.isAvailable;
      setEntries(newState, sortEntries(currentStateEntries));
      return newState;
    case EntriesActions.DeleteEntry:
      setEntries(
        newState,
        currentState.entries.filter(({ id }) => id !== action.payload.id)
      );
      return newState;
    default:
      return currentState;
  }
};

const [EntriesContext, EntriesProvider] = createStore(reducer, initialState);

export { EntriesContext, EntriesProvider, EntriesActions };
