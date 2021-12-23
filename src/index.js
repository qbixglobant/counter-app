import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./Components/Counter";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Counter value="10" />
  </React.StrictMode>,
  document.getElementById('root')
);
