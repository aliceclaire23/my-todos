import React from 'react';

const List = ({
  items,
  removeItem,
  toggleComplete,
  displayCategory,
  displayAll
}) => {
  return (
    <div>
      <p>Total item count: {items.length}</p>
      <p>
        Total completed items: {items.filter(item => item.completed).length}
      </p>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            className={item.hidden ? 'hidden' : null}
            onClick={() => toggleComplete(item)}
          >
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
      <button onClick={() => displayAll()}>All</button>
    </div>
  );
};

export default List;
