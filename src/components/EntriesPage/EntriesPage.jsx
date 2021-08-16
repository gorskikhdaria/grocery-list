import { Filters } from '../Filters';
import { EntriesList } from './EntiresList';
import './EntriesPage.scss';
import { AddEntryButton } from '../AddEntryButton';

const EntriesPage = () => {
  const entriesList = [];

  return (
    <div className="entriesPage">
      <div className="headerRow">
        <h1>Entries List</h1>
        <AddEntryButton />
      </div>

      <div className="filtersRow">
        <Filters />
      </div>
      <EntriesList entiresList={entriesList} />
    </div>
  );
};

export default EntriesPage;
