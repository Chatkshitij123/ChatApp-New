import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as React from 'react'

// to run both backend and frontend at the same time
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>

    
    <App />
    </ChakraProvider>
    </BrowserRouter>
    

    
   
  </React.StrictMode>
);


