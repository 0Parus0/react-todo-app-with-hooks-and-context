import {useState} from 'react';

const useToggleState = (initialState) => {
  const [stateToToggle, setStateToToggle] = useState(initialState);

  const toggle = () => {
    setStateToToggle(!stateToToggle);

  }

  return [stateToToggle, toggle];
}

export default useToggleState;