import React from 'react';
import PropTypes from 'prop-types';

class MainComponent extends React.Component {
    render () {
        return <div>Hello world! {this.props.children}</div>;
    }
}

MainComponent.propTypes = {
    children: PropTypes.string.isRequired
}

export default MainComponent;
