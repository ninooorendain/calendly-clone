import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './assets/tailwind.output.css';

// Add dependencies here
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import registerServiceWorker from 'react-service-worker';

const appSW = registerServiceWorker()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes appServiceWorker={appSW} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
reportWebVitals();
