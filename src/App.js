import logo from './logo.svg';
import './App.css';
import useCatCall from './useCatCall';
import useDateToday from './useDateToday';
import React , { useState, useEffect } from "react";

function App() {

  const newCat = useCatCall();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

    return () => {
      clearInterval(intervalID);
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Time on page: { timer }</h1>
        <img src={logo} className="App-logo" alt="logo" />
        { newCat && 
          <img className="cat" src={newCat} alt="cat"/>
        }
        <h1>{ useDateToday() === "Saturday" || "Sunday" ?
        "Wow already the weekend ?" : "It's week time !"}</h1>
      </header>
    </div>
  );
}

export default App;
