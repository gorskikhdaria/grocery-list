import { Filters } from '../Filters';
import { EntriesList } from './EntiresList';
import './EntriesPage.scss';
import { AddEntryButton } from '../AddEntryButton';
import { EntriesProvider } from './EntiresList/EntriesStore';

const EntriesPage = () => {
  return (
    <EntriesProvider>
      <div className="entriesPage">
        <div className="headerRow">
          <h1>Entries List</h1>
          <AddEntryButton />
        </div>

        <div className="filtersRow">
          <Filters />
        </div>
        <EntriesList />
      </div>
    </EntriesProvider>
  );
};

export default EntriesPage;
