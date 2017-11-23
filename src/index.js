import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const divStyle = {
    backgroundColor: 'while'
};

class Scene extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleSubmit = (post) => {
        this.setState(post);
    }

    render () {
        return <Input process={this.handleSubmit} />
    }
}


ReactDOM.render(<Scene style={divStyle} />, document.getElementById('root'));
registerServiceWorker();
