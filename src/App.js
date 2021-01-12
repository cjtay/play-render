import React, { useState } from 'react';
// import Modal from './Modal';
import List from './List';

function App() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
        console.log(show);
    };
    return (
        <>
            <h1>Render App</h1>
            <List show={show} />
            <div className="btn" onClick={handleClick}>
                Change State
            </div>
        </>
    );
}

export default App;
