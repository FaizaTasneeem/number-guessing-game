import { useEffect, useReducer } from 'react';
import WinModal from './components/WinModal';
import ResetModal from './components/ResetModal';

const initialState = {
  number: Math.ceil(Math.random() * 100),
  numberGuessed: "",
  numbersList: [],
  errorMsg: "",
  statusMsg: "",
  showWinModal: false,
  showResetModal: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "restart":
      return {
        ...initialState, 
        number: Math.ceil(Math.random() * 100),
      }
    case "set_input":
      return {
        ...state, 
        numberGuessed: action.input,
      }
    case "set_guess_number":
      return {
        ...state, 
        numberGuessed: action.input,
        numbersList: [...state.numbersList, state.numberGuessed],
        [action.modalState]: true,
        statusMsg: action.statusMsg,
      }
    case "set_error_msg":
      return {
        ...state, 
        errorMsg: action.errorMsg,
      }
    case "clear":
      return {
        ...state,
        numberGuessed: "",
        errorMsg: ""
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state.number);
  }, [state.number]) 

  function handleInputChange(e) {
    dispatch({type: "set_input", input: e.target.value});
  }

  function handleNumberSubmit() {
    if(state.numberGuessed === "") {
      dispatch({type: "set_error_msg", errorMsg: "Please enter a number between 1-100"});
      return;
    }
    const inputInt = parseInt(state.numberGuessed);
    
    const {statusMsg, modalState} = checkStatus(inputInt);
    
    dispatch({
      type: "set_guess_number", 
      input: inputInt, 
      modalState,
      statusMsg
    });

    dispatch({type: "clear"});

  }

  function checkStatus(inputInt) {
    if (inputInt === state.number) { 
      return {statusMsg: "✅ Correct", modalState: "showWinModal"};
    }
    else if (inputInt !== state.number && state.numbersList.length === 4) {
      if (inputInt < state.number) { 
        return {statusMsg: `❌ Too low! Try again. (${4 - state.numbersList.length} left)`, modalState: "showResetModal"};
      }
      else if (inputInt > state.number) { 
        return {statusMsg: `❌ Too high! Try again. (${4 - state.numbersList.length} left)`, modalState: "showResetModal"};
      }
    }
    else if (inputInt < state.number) { 
      return {statusMsg: `❌ Too low! Try again. (${4 - state.numbersList.length} left)`};
    }
    else if (inputInt > state.number) { 
      return {statusMsg: `❌ Too high! Try again. (${4 - state.numbersList.length} left)`};
    }
  }


  return (
    <div className='container'>
      <div className='header'>
        <div className='dice'>🎲 </div>
        <h1>Guess the Number</h1>
      </div>
      <h3>Find the secret number between 1-100</h3>
      
      <input type="number" id="number" name="number" value={state.numberGuessed} placeholder="Enter your guess" onChange={(e) => handleInputChange(e)} disabled={state.numbersList.length === 5 || state.showWinModal} />
      
      <button onClick={handleNumberSubmit} disabled={state.numbersList.length === 5 || state.showWinModal}>Guess</button>
      {state.errorMsg !== "" && <div className='error'>{state.errorMsg}</div>}
      
      {<h3 className='num-list'>Previous Guesses: {state.numbersList.join(", ")}</h3>}
      <h4 className={`status ${state.statusMsg ? 'show-div' : ''}`}>{state.statusMsg}</h4>
      
      {state.showWinModal && <WinModal />}
      
      {(state.showWinModal || state.showResetModal) && <ResetModal dispatch={dispatch}/>}
    </div>
  )
}

export default App
