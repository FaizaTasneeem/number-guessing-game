import {useEffect} from "react";

function WinModal({setStatusMsg}) {
    useEffect(() => { 
        setStatusMsg("✅ Correct"); 
    }, []);

    return (
        <div>
            Win
        </div>
    );
}

export default WinModal;
