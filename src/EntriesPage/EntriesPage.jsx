import { useState, useEffect, useCallback } from 'react';
import { Modal, Button } from '../common';
import { Filters } from '../Filters';
import { EntriesList } from './EntiresList';
import './EntriesPage.scss';

const EntriesPage = () => {

  const entriesList = [];

  return (
    <div className="entriesPage">
      <h1>Entries List</h1>
      <div className="filtersRow">
        <Filters/>
      </div>
      <EntriesList entiresList={entriesList} />
    </div>
  );
};

export default EntriesPage;
