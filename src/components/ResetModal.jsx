import React from "react";

function ResetModal({setShowResetModal, setNumber}) {
    
    function handleRestart() {
        setNumber(Math.ceil(Math.random() * 100));
        setShowResetModal(false);
    }   

    return (
        <button onClick={handleRestart}>Restart</button>
    );
}

export default ResetModal;
