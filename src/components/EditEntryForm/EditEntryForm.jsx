import { useState } from 'react';
import './EditEntryForm.scss';
import { Button, Input, Select } from '../../commonComponents';

const priorityOptions = [1, 2, 3, 4, 5].map((item) => ({
  key: item,
  value: item,
}));

const EditEntryForm = ({ entry, buttonName, onSubmit }) => {
  const [name, setName] = useState(entry?.name || '');
  const [priority, setPriority] = useState(entry?.priority || 1);
  const [isAvailable, setIsAvailable] = useState(entry?.isAvailable || true);

  const onSelectPriorityOption = (priority) => {
    setPriority(priority);
  };

  return (
    <div className="editEntryForm">
      <div className="formRow">
        <div className="formName">Name:</div>
        <Input
          className="formValue"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="formRow">
        <div className="formName">Priority:</div>
        <Select
          className="formValue"
          options={priorityOptions}
          onSelectOption={onSelectPriorityOption}
          selectedValue={priority}
        />
      </div>
      <div className="formRow">
        <div className="formName">Status:</div>
        <div className="formValue">
          <input
            type="checkbox"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
          />
        </div>
      </div>

      <Button
        type="submit"
        onClick={() => onSubmit({ name, priority, isAvailable })}
      >
        {buttonName}
      </Button>
    </div>
  );
};

export { EditEntryForm };
