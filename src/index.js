import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/style/normalize.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore  from './redux/store';
const store=configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
            <App />
         </Provider>
        </BrowserRouter>
    </React.StrictMode>

);




