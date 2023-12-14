import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkContextProvider } from './context/WorkoutsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WorkContextProvider>
    <App/>
</WorkContextProvider>);

