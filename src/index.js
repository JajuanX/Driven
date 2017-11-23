import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import Page from './container/Page'
import './App.css'

const App = () => (
  <Page />
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
