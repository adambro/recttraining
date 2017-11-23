import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainComponent />, document.getElementById('root'));
registerServiceWorker();
