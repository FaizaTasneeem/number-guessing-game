import { useState, useEffect } from "react";
import Confetti from "react-confetti";

function WinModal() {

    return (
        <div>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            {/* Win */}
        </div>
    );
}

export default WinModal;
