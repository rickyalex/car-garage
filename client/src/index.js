import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';
import reducer from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage';

// import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState()
const store = createStore(reducer, persistedState);

store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render(
	<Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
