import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'modern-normalize';

import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './reduxStore/store.js';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
