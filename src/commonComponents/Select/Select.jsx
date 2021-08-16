import { useState } from 'react';
import './Select.scss';

const emptyOptionValue = 'Не выбрано';

export function Select({ options, onSelectOption, className, selectedValue }) {
  const [selected, setSelected] = useState(selectedValue || emptyOptionValue);

  const onSelect = ({ target }) => {
    const value = target?.value === emptyOptionValue ? null : target?.value;
    setSelected(target?.value);
    onSelectOption(value);
  };

  return (
    <select className={className} value={selected} onChange={onSelect}>
      <option>{emptyOptionValue}</option>
      {options.map(({ key, value }) => (
        <option value={value} key={key}>
          {value}
        </option>
      ))}
    </select>
  );
}
