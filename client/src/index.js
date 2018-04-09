import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider>
        <Routes />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
