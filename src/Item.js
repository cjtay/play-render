import React from 'react';

import './styles.css';

const Item = ({ item, showMod, handleShow }) => {
    return (
        <div className="wrapper">
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div className="btn" onClick={() => handleShow(item.id)}>
                Show Modal
            </div>
        </div>
    );
};

export default Item;
