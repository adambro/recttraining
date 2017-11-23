import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class MainComponent extends React.Component {
    render () {
        return <MainScene>Hello world</MainScene>;
    }
}

const MainScene = (props) => {
    return (<div>{props.children}</div>);
}

MainComponent.propTypes = {
    todos: PropTypes.string.isRequired
}

ReactDOM.render(<MainComponent />, document.getElementById('root'));
registerServiceWorker();
