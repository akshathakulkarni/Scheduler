import React, {useState} from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  console.log('history = ', history);
  const transition = (newMode) => {
    setMode(newMode);
    history.push(newMode);
    console.log('history from transition = ', history);
  }
  const back = (newMode) => {
    if (mode === initial) {
      setMode(initial);
    } else {
      history.pop();
      console.log('history from back = ', history);
      setMode(history[history.length - 1]);
    }
    
    
  }
  return { mode, transition, back };
}