import { useContext } from 'react';
import './AddEntryButton.scss';
import { Button } from '../../commonComponents';
import { ModalActions, ModalContext } from '../../commonComponents/Modal';
import { EditEntryForm } from '../EditEntryForm';
import {
  EntriesActions,
  EntriesContext,
} from '../EntriesPage/EntiresList/EntriesStore';

const AddEntryButton = ({}) => {
  const { dispatch: dispatchModal } = useContext(ModalContext);
  const { dispatch: dispatchEntries } = useContext(EntriesContext);

  const onAddEntry = (entry) => {
    dispatchEntries({ type: EntriesActions.AddEntry, payload: { entry } });
    dispatchModal({ type: ModalActions.Close });
  };

  const openAddModal = () => {
    dispatchModal({
      type: ModalActions.Open,
      payload: {
        content: <EditEntryForm submitButtonName="Add" onSubmit={onAddEntry} />,
      },
    });
  };

  return (
    <Button className="addButton" onClick={openAddModal}>
      Add
    </Button>
  );
};

export { AddEntryButton };
