import { useRef, createContext, useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Context = createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [context, setContext] = useState();

  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <div className="container">
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </div>
  );
}

export function Modal({ closeModal, opened, children }) {
  const modalNode = useContext(Context);

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

  return modalNode && opened
    ? ReactDOM.createPortal(
        <div className="overlay">
          <div className="dialog" ref={ref}>
            <div className="content">{children}</div>
            <div className="closeButton" onClick={closeModal} />
          </div>
        </div>,
        modalNode
      )
    : null;
}
