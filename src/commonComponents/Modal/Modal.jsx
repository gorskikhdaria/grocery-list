import { useRef, useContext, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
import { ModalActions, ModalContext } from './ModalStore';

export function Modal({ }) {
  const { state, dispatch } = useContext(ModalContext);
  const closeModal = useCallback(() => dispatch({ type: ModalActions.Close }), [
    dispatch,
  ]);

  const ref = useRef();
  const handleOutsideClick = (e) => {
    if (!ref.current?.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return state.content && state.isOpened
    ? ReactDOM.createPortal(
        <div className="overlay">
          <div className="dialog" ref={ref}>
            <div className="content">{state.content}</div>
            <div className="closeButton" onClick={closeModal} />
          </div>
        </div>,
      document.getElementById('root')
      )
    : null;
}
