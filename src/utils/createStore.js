import {
  useReducer,
  createContext,
} from 'react';

const createStore = (
  reducer,
  initialState
) => {
  const defaultDispatch = () => initialState;

  const context = createContext({
    state: initialState,
    dispatch: defaultDispatch,
  });

  const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <context.Provider value={{ state, dispatch }} {...props} />;
  };

  return [context, Provider];
};

export default createStore;
