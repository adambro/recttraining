import React from 'react';
import PropTypes from 'prop-types';

const Presenter = (props) => {
    return (
        <li className="red">{props.text}</li>
    );
}

export default Presenter
