import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { ascendingOrder } = props;
  const items = useMemo(() => [5, 3, 1, 10, 9], []); // Replace with your dynamic data source

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return ascendingOrder ? [...items].sort((a, b) => a - b) : [...items].sort((a, b) => b - a);
  }, [items, ascendingOrder]);

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);