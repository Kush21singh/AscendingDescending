import React, { useState, useCallback } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeSortOrderHandler = useCallback(() => {
    setAscendingOrder((prevOrder) => !prevOrder);
  }, []);

  return (
    <div className="app">
      <DemoList title={listTitle} ascendingOrder={ascendingOrder} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeSortOrderHandler}>
        {ascendingOrder ? 'Change to Descending Order' : 'Change to Ascending Order'}
      </Button>
    </div>
  );
}

export default App;