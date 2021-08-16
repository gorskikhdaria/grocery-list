import './Button.scss';

export function Button({ onClick, className, type = 'button', children }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
