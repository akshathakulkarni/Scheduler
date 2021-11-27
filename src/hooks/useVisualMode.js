import {useState} from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  console.log('history = ', history);
  const transition = (mode, replace = false) => {
    if (replace) {
      return setMode(mode)
    }
    setMode(mode);
    setHistory([...history, mode]);
    console.log('history = ', history);
  }
  const back = () => {
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