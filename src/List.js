import React, { useState } from 'react';
import Modal from './Modal';
import Item from './Item';
import { data } from './data';

const List = ({ show }) => {
    const [showMod, setShowMod] = useState(false);
    const [itemId, setItemId] = useState('');

    const handleShow = (id) => {
        console.log('item component', id);
        console.log('showMod: ', showMod);
        console.log('itemId: ', itemId);
        setShowMod(!showMod);
        setItemId(id);
    };

    const handleClose = () => {
        console.log('handleClose triggered');
        setShowMod(false);
    };

    return (
        <>
            {data.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    showMod={showMod}
                    handleShow={handleShow}
                />
            ))}
            {showMod && <Modal item={itemId} handleClose={handleClose} />}
        </>
    );
};

export default List;
