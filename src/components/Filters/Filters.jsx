import { useContext } from 'react';
import './Filters.scss';
import { Select } from '../../commonComponents';
import {
  EntriesActions,
  EntriesContext,
} from '../EntriesPage/EntiresList/EntriesStore';

export const StatusOption = {
  Have: 'have',
  RanOut: 'ran_out',
};

const statusOptions = [
  {
    key: StatusOption.Have,
    value: 'have',
  },
  {
    key: StatusOption.RanOut,
    value: 'ran out',
  },
];

const Filters = ({}) => {
  const { dispatch } = useContext(EntriesContext);
  const onSelectOption = (filter) => {
    dispatch({ type: EntriesActions.SetStatusFilter, payload: { filter } });
  };

  return (
    <div className="filters">
      Status:
      <Select
        className="formValue"
        options={statusOptions}
        onSelectOption={onSelectOption}
      />
    </div>
  );
};

export { Filters };
