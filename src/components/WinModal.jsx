import { useState, useEffect } from "react";
import Confetti from "react-confetti";

function WinModal({dispatch}) {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <div className="win-container">
            <Confetti width={windowSize.width} height={windowSize.height} />
            <div className="modal">
                <div className="win-modal-item1">Congratulations😍 !!! You've won the game.</div>
                <button className="reset" onClick={() => dispatch({type: 'restart'})}>Restart</button>
            </div>
        </div>
    );
}

export default WinModal;
