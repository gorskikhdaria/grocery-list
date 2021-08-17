import { useContext } from 'react';
import './AddEntryButton.scss';
import { Button } from '../../commonComponents';
import { ModalActions, ModalContext } from '../../commonComponents/Modal';
import { EditEntryForm } from '../EditEntryForm';
import { setEntryToLocalStorage } from '../../utils/localStorage';

const AddEntryButton = ({}) => {
  const { dispatch } = useContext(ModalContext);

  const onAddEntry = (entry) => {
    setEntryToLocalStorage(entry);
    dispatch({ type: ModalActions.Close });
  };

  const openAddModal = () => {
    dispatch({
      type: ModalActions.Open,
      payload: {
        content: <EditEntryForm buttonName="Add" onSubmit={onAddEntry} />,
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
