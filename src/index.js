import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Filter from './Filter';
import Presenter from './Presenter';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const divStyle = {
    backgroundColor: 'while'
};

class Scene extends React.Component {
    constructor() {
        super();
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        this.state = {
            posts
        };
    }

    handleSubmit = (post) => {
        let posts = this.state.posts;
        posts.push(post);
        this.setState({
            posts
        });
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    handleFilter = (form) => {
        this.setState({
            filter: form.filter
        })
    }

    render () {
        console.log(this.state, 'index')
        return (
        <div>
            <Filter process={this.handleFilter} />
            <ul>
                {this.state.posts.filter(post => post.text.includes(this.state.filter)).map(post => <Presenter text={post.text} />)}
            </ul>
            <Input process={this.handleSubmit} />
        </div>
        )
    }
}


ReactDOM.render(<Scene style={divStyle} />, document.getElementById('root'));
registerServiceWorker();
