import { useState, useEffect } from 'react';
import './EntriesList.scss';

const EntriesList = ({ entriesList }) => {
  return (
    <div className="entriesList">
      <div className="listHeader">
        <span className="column name">Name</span>
        <span className="column priority">Priority</span>
        <span className="column status">Status</span>
      </div>

      <>
        {entriesList?.length ? (
          <ul>
            {entriesList.map(({ id, name, priority, isAvailable }) => (
              <li key={id} className="listItem">
                <span className="column name">{name}</span>
                <span className="column priority">{priority}</span>
                <span className="column status">
                  {isAvailable ? 'have' : 'ran put'}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          'List is empty'
        )}
      </>
    </div>
  );
};

export { EntriesList };
