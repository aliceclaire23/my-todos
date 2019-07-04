import React from 'react';

const List = ({ items, removeItem, toggleComplete, displayCategory }) => {
  return (
    <div>
      <p>Item count: {items.length}</p>
      <p>Completed items: {items.filter(item => item.completed).length}</p>
      <ul>
        {items.map((item, i) => (
          <li key={i} onClick={() => toggleComplete(item)}>
            <span className={item.completed ? 'complete' : null}>
              {item.text}
            </span>
            <button onClick={() => removeItem(item)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => displayCategory('lifestyle')}>Lifestyle</button>
      <button onClick={() => displayCategory('rest')}>Rest</button>
      <button onClick={() => displayCategory('code')}>Code</button>
    </div>
  );
};

export default List;
