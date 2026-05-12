import { useState, useEffect } from 'react';
import WinModal from './components/WinModal';
import ResetModal from './components/ResetModal';

function App() {
  const [number, setNumber] = useState(Math.ceil(Math.random() * 100));
  const [numberGuessed, setNumberGuessed] = useState("");
  const [numbersList, setNumbersList] = useState([]);
  const [statusMsg, setStatusMsg] = useState("");
  const [showWinModal, setShowWinModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    console.log(number);
  }, [])

  function handleNumberSubmit() {
    const inputInt = parseInt(numberGuessed);

    setNumbersList([...numbersList, inputInt]);
    console.log(numbersList.length);

    if (inputInt === number) { 
      setShowWinModal(true);
    }
    else if (inputInt !== number && numbersList.length === 5) {
      setShowResetModal(true);
    }
    else if (inputInt < number) { 
      setStatusMsg("Number too low");
    }
    else if (inputInt > number) { 
      setStatusMsg("Number too high");
    }

  }

  return (
    <div className='container'>
      <input type="number" id="number" name="number" onChange={(e) => setNumberGuessed(e.target.value)} disabled={numbersList.length > 5 || showWinModal} />
      
      <button onClick={handleNumberSubmit} disabled={numbersList.length > 5 || showWinModal}>Submit</button>
      
      {statusMsg && <div className='status'>{statusMsg}</div>}
      {<div className='num-list'>{numbersList.join(", ")}</div>}
      {showWinModal && <WinModal/>}
      {showResetModal && <ResetModal/>}
    </div>
  )
}

export default App
