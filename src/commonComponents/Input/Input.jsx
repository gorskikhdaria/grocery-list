import './Input.scss';
import classnames from 'classnames';

export function Input({ onChange, className, type = 'text', value }) {
  return (
    <input
      className={classnames('input', className)}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
