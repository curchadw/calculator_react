
import './App.css';
import Results from './components/Results'
import KeyPadComponent from './components/KeyPadComponent';
import React, {useState} from 'react';


function App() {

  const[result, setResult] = useState(0)

  const calculate =()=>{
    try {
      setResult((eval(result) || "") + "")
    }catch(e){
      setResult("error")
    }
  }

  const reset =()=>{
    setResult("")
  }

  const backspace =()=>{
    setResult(result.slice(0,-1))
  }

 const onClick = button =>{
    if(button === '='){
      calculate()
    }else if(button === 'C'){
      reset()
    }else if(button === 'CE'){
      backspace()
    }else{
      setResult(result + button)
    }
  }

  

  return (
    <div>
      <div className="calculator-body">
        <h1>Calculator With Hooks</h1>
        <Results result={useState(result)}/>
        <KeyPadComponent onClick={onClick}/>
      </div>
    </div>
  );
}

export default App;
