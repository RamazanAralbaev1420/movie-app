import React from 'react';
import ReactDOM from 'react-dom/client';
import { APIKEY } from './context/context.jsx';
import Routing from './Routing.js';
import './styles/main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <APIKEY.Provider value='555761327a8140a99538eaf57007c9f8'>
        <Routing />
    </APIKEY.Provider>
);


