import React from 'react';
import "./header.css"

const AppHeader = ({text}) => {
    return (
        <div className="header d-flex">
            <h5>{text}</h5>
        </div>
    );
};

export default AppHeader;