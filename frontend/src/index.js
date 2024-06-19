import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { GlobalProvider } from './context/globalContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
    <App />   
    </GlobalProvider>
   
  </React.StrictMode>
);

