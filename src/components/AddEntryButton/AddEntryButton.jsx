import { useContext } from 'react';
import './AddEntryButton.scss';
import { Button } from '../../commonComponents';
import { ModalActions, ModalContext } from '../../commonComponents/Modal';
import { AddEntryForm } from '../AddEntryForm';

const AddEntryButton = ({}) => {
  const { dispatch } = useContext(ModalContext);

  const openAddModal = () => {
    dispatch({
      type: ModalActions.Open,
      payload: {
        content: <AddEntryForm />,
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
