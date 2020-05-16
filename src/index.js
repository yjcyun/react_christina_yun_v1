import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WebProvider } from './context/context';
import './index.css';

ReactDOM.render(
  <WebProvider>
    <App />
  </WebProvider>,
  document.getElementById('root')
);

