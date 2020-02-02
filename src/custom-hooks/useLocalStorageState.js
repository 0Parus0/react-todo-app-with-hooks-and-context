import {useState, useEffect} from 'react';

const useLocalStorage = (key, defaultVal) => {
  const [state, setState] = useState(() => {
    let value;
    try{
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch(error){
      value = defaultVal;
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  },[state,key]);
  return[state, setState];
};

export default useLocalStorage;