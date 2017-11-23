import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: 'user',
            text: 'yo'
        }
    }

    onChangeText = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onClick = () => {
        console.log(this.state, 'Input');
        this.props.process(this.state)
    }

    render () {
        return (
        <div>
            Name: <input name="username" defaultValue={this.state.username} /><br />
            Image: <input name="image" defaultValue="" /><br />
            Text: <textarea name="text" value={this.state.text} onChange={this.onChangeText}/><br />
            <button onClick={this.onClick}>Go!</button>
        </div>
    )}
}

Input.propTypes = {
    process: PropTypes.func.isRequired
}

export default Input;
