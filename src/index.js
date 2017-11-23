import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './MainComponent';
import Input from './Input';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const divStyle = {
    backgroundColor: 'while'
};

const Scene = (props) => (
    <div style={props.style}>
        <MainComponent klasa="red">aaa</MainComponent>
        <MainComponent>bbb</MainComponent>
        <Input />
    </div>
);

ReactDOM.render(<Scene style={divStyle}/>, document.getElementById('root'));
registerServiceWorker();
