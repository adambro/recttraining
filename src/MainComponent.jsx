import React from 'react';
import PropTypes from 'prop-types';

class MainComponent extends React.Component {
    render () {
        return <MainScene>Hello world</MainScene>;
    }
}

const MainScene = (props) => {
    return (<div>{props.children}</div>);
}

MainComponent.propTypes = {
    children: PropTypes.string.isRequired
}

export default MainComponent;
