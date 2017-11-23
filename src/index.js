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
        this.state = {
            post: {}
        };
    }

    handleSubmit = (post) => {
        this.setState({
            post
        });
    }

    render () {
        console.log(this.state, 'index')
        return (
        <div>
            {this.state.post.text}
            <Input process={this.handleSubmit} />
        </div>
        )
    }
}


ReactDOM.render(<Scene style={divStyle} />, document.getElementById('root'));
registerServiceWorker();
