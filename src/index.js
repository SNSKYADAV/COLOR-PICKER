import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './App';
import { colors } from './colors';

ReactDOM.render(
  <React.StrictMode>
    <ColorPicker colors={colors} />
  </React.StrictMode>,
  document.getElementById('root')
);