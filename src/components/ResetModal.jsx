import React from "react";

function ResetModal({dispatch}) {
    
    return (
        <button onClick={() => dispatch({type: 'restart'})}>Restart</button>
    );
}

export default ResetModal;
