import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Componente from './Componente';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Componente />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
