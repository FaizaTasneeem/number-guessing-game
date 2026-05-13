import React from "react";

function ResetModal({setShowWinModal, setShowResetModal, setNumber, setNumbersList, setStatusMsg}) {
    
    function handleRestart() {
        setNumber(Math.ceil(Math.random() * 100));
        setNumbersList([]);
        setStatusMsg("");
        setShowWinModal(false);
        setShowResetModal(false);
    }   

    return (
        <button onClick={handleRestart}>Restart</button>
    );
}

export default ResetModal;
