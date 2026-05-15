import React from "react";

function ResetModal({dispatch}) {
    
    return (
        <div className="reset-container">
            <div className="modal">
                <div className="win-modal-item1">Oops😔 !!! You've reached the maximum limit. Please try again. </div>
                <button className="reset" onClick={() => dispatch({type: 'restart'})}>Restart</button>
            </div>
        </div>
    );
}

export default ResetModal;
