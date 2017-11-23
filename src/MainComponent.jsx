import React from 'react';
import PropTypes from 'prop-types';

class MainComponent extends React.Component {
    render () {
        return <div style={this.props.style} className={this.props.klasa}>Hello world! {this.props.children}</div>;
    }
}

MainComponent.propTypes = {
    klasa: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default MainComponent;
