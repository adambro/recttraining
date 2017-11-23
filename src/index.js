import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class MainComponent extends React.Component {
}

const MainScene = <MainComponent>Hello world!</MainComponent>;

MainComponent.PropTypes = {
    todos: PropTypes.string.isRequired
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));
registerServiceWorker();
