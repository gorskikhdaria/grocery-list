import createStore from '../../utils/createStore';

const ModalActions = {
  Close: 'CLOSE',
  Open: 'OPEN',
};

const initialState = {
  isOpened: false,
  content: null,
};

const reducer = (currentState, action) => {
  const newState = { ...currentState };
  switch (action.type) {
    case ModalActions.Open:
      newState.isOpened = true;
      newState.content = action.payload.content;
      document.body.style.overflowY = 'hidden';
      return newState;
    case ModalActions.Close:
      newState.isOpened = false;
      newState.content = null;
      document.body.style.overflowY = 'initial';
      return newState;
    default:
      return currentState;
  }
};

const [ModalContext, ModalProvider] = createStore(reducer, initialState);

export { ModalContext, ModalProvider, ModalActions };
