import React from 'react';

const List = ({ items, removeItem }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <span className={item.completed ? 'complete' : null}>
            {item.text}
          </span>
          <button onClick={() => removeItem(item)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
