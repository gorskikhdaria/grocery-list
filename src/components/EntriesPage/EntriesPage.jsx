import { Filters } from '../Filters';
import { EntriesList } from './EntiresList';
import './EntriesPage.scss';
import { AddEntryButton } from '../AddEntryButton';
import { getEntriesFromLocalStorage } from '../../utils/localStorage';
import { useState } from 'react';

const EntriesPage = () => {
  const entriesList = getEntriesFromLocalStorage();
  console.log('entriesList EntriesPage', entriesList);

  return (
    <div className="entriesPage">
      <div className="headerRow">
        <h1>Entries List</h1>
        <AddEntryButton />
      </div>

      <div className="filtersRow">
        <Filters />
      </div>
      <EntriesList entriesList={entriesList} />
    </div>
  );
};

export default EntriesPage;
