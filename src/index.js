import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const Scene = () => (
    <div>
        <MainComponent>aaa</MainComponent>
        <MainComponent><strong>bbb</strong></MainComponent>
    </div>
);

ReactDOM.render(<Scene />, document.getElementById('root'));
registerServiceWorker();
