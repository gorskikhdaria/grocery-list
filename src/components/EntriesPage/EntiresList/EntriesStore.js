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
  SetStatusFilter: 'SET_STATUS_FILTER',
};

const initialState = {
  entries: getEntriesFromLocalStorage(),
  filters: [],
};

const reducer = (currentState, action) => {
  const newState = { ...currentState };
  switch (action.type) {
    case EntriesActions.SetStatusFilter:
      newState.statusFilter = action.payload.filter;
      return newState;
    case EntriesActions.AddEntry:
      const newEntries = sortEntries([
        { ...action.payload.entry, id: uuid() },
        ...currentState.entries,
      ]);
      newState.entries = newEntries;
      setEntriesToLocalStorage(newEntries);
      return newState;
    case EntriesActions.EditEntry:
      const currentStateEntries = [...currentState.entries];
      const existingEntry = currentStateEntries.find(
        ({ id }) => id === action.payload.entry.id
      );
      existingEntry.name = action.payload.entry.name;
      existingEntry.isAvailable = action.payload.entry.isAvailable;
      setEntriesToLocalStorage(sortEntries(currentStateEntries));
      return newState;
    default:
      return currentState;
  }
};

const [EntriesContext, EntriesProvider] = createStore(reducer, initialState);

export { EntriesContext, EntriesProvider, EntriesActions };
