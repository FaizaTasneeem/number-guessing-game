import { useState, useEffect } from 'react';
import WinModal from './components/WinModal';
import ResetModal from './components/ResetModal';

function App() {
  const [number, setNumber] = useState(Math.ceil(Math.random() * 100));
  const [numberGuessed, setNumberGuessed] = useState("");
  const [numbersList, setNumbersList] = useState([]);

  const [errorMsg, setErrorMsg] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const [showWinModal, setShowWinModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    console.log(number);
  }, [number])

  function handleNumberSubmit() {
    if(numberGuessed === "") {
      setErrorMsg("Please enter a number between 1-100");
      return;
    }
    const inputInt = parseInt(numberGuessed);
    setNumbersList([...numbersList, inputInt]);

    if (inputInt === number) { 
      setShowWinModal(true);
    }
    else if (inputInt !== number && numbersList.length === 4) {
      setShowResetModal(true);
      if (inputInt < number) { 
        setStatusMsg(`❌ Too low! Try again. (${4 - numbersList.length} left)`);
      }
      else if (inputInt > number) { 
        setStatusMsg(`❌ Too high! Try again. (${4 - numbersList.length} left)`);
      }
    }
    else if (inputInt < number) { 
      setStatusMsg(`❌ Too low! Try again. (${4 - numbersList.length} left)`);
    }
    else if (inputInt > number) { 
      setStatusMsg(`❌ Too high! Try again. (${4 - numbersList.length} left)`);
    }

  }

  return (
    <div className='container'>
      <h1>🎲 Guess the Number</h1>
      <h1>I'm thinking of a number between 1–100 </h1>
      
      <input type="number" id="number" name="number" value={numberGuessed} onChange={(e) => setNumberGuessed(e.target.value)} disabled={numbersList.length === 5 || showWinModal} required/>
      <button onClick={handleNumberSubmit} disabled={numbersList.length === 5 || showWinModal}>Guess</button>
      {errorMsg !== "" && <div className='error'>{errorMsg}</div>}
      
      {<h3 className='num-list'>Previous Guesses: {numbersList.join(", ")}</h3>}
      {statusMsg && <h4 className='status'>{statusMsg}</h4>}
      
      {showWinModal && <WinModal setStatusMsg={setStatusMsg}/>}
      
      {(showWinModal || showResetModal ) && <ResetModal setShowWinModal={setShowWinModal} setShowResetModal={setShowResetModal} setNumber={setNumber} setNumbersList={setNumbersList} setStatusMsg={setStatusMsg}/>}
    </div>
  )
}

export default App
