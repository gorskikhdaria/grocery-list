import { useContext } from 'react';
import './EntriesList.scss';
import { ModalActions, ModalContext } from '../../../commonComponents/Modal';
import { EditEntryForm } from '../../EditEntryForm';
import { EntriesActions, EntriesContext } from './EntriesStore';
import classnames from 'classnames';

const EntriesList = () => {
  const { dispatch: dispatchModal } = useContext(ModalContext);
  const { state, dispatch: dispatchEntries } = useContext(EntriesContext);

  const onEditEntry = (entry) => {
    dispatchEntries({ type: EntriesActions.EditEntry, payload: { entry } });
    dispatchModal({ type: ModalActions.Close });
  };

  const onEntryClick = (entry) => {
    dispatchModal({
      type: ModalActions.Open,
      payload: {
        content: (
          <EditEntryForm
            entry={entry}
            buttonName="Edit"
            onSubmit={onEditEntry}
          />
        ),
      },
    });
  };

  return (
    <div className="entriesList">
      <div className="listHeader">
        <span className="column name">Name</span>
        <span className="column priority">Priority</span>
        <span className="column status">Status</span>
      </div>

      <>
        {state.entries?.length ? (
          <ul>
            {state.entries.map(({ id, name, priority, isAvailable }) => (
              <li
                key={id}
                className={classnames(
                  'listItem',
                  !isAvailable && 'listItemUnavailable'
                )}
                onClick={() =>
                  onEntryClick({ id, name, priority, isAvailable })
                }
              >
                <span className="column name">{name}</span>
                <span className="column priority">{priority}</span>
                <span className="column status">
                  {isAvailable ? 'have' : 'ran out'}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          'List is empty'
        )}
      </>
    </div>
  );
};

export { EntriesList };
