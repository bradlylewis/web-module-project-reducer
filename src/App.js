import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers/index';
import { applyNumber, applyOperation, clearDisplay, setMemory, applyMemory, clearMemory } from './actions/index';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handlers
  const applyNumberHandler = number => dispatch(applyNumber(number))
  const applyOperationHandler = operation => dispatch(applyOperation(operation))
  const clearDisplayHandler = () => dispatch(clearDisplay())
  const setMemoryHandler = () => dispatch(setMemory())
  const applyMemoryHandler = () => dispatch(applyMemory())
  const clearMemoryHandler = () => dispatch(clearMemory())

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={() => setMemoryHandler()}/>
              <CalcButton value={"MR"} onClick={() => applyMemoryHandler()}/>
              <CalcButton value={"MC"} onClick={() => clearMemoryHandler()}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => applyNumberHandler(1)}/>
              <CalcButton value={2} onClick={() => applyNumberHandler(2)}/>
              <CalcButton value={3} onClick={() => applyNumberHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => applyNumberHandler(4)}/>
              <CalcButton value={5} onClick={() => applyNumberHandler(5)}/>
              <CalcButton value={6} onClick={() => applyNumberHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => applyNumberHandler(7)}/>
              <CalcButton value={8} onClick={() => applyNumberHandler(8)}/>
              <CalcButton value={9} onClick={() => applyNumberHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => applyOperationHandler('+')}/>
              <CalcButton value={"*"} onClick={() => applyOperationHandler('*')}/>
              <CalcButton value={"-"} onClick={() => applyOperationHandler('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearDisplayHandler()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
