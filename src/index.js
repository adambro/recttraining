import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Filter from './Filter';
import Presenter from './Presenter';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MainComponent from './MainComponent';



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

const routes = <Router>
<div>
    <ul>
        <li><Link to='/main'>Main</Link></li>
        <li><Link to='/scene'>Scene</Link></li>
    </ul>
    <Route component={MainComponent} exact path='/main' />
    <Route component={Scene} exact path='/scene' />
</div>
</Router>

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
