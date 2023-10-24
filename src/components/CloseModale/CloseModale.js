import React from 'react';

function CloseButton({ onClick }) {
    return (
        <button className="close-button" onClick={onClick}>
            X
        </button>
    );
}

export default CloseButton;
