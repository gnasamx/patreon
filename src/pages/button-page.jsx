import React, {createContext, useContext, useReducer} from 'react';
import Background from '../components/background/background';
import Button from '../components/button/button';


const ButtonPage = () => {

  const initialState = {
    color: 'primary',
    width: 'small',
    isLoading: false,
    size: 'small',
    iconPosition: 'left',
    disabled: false
  };

  const reducer = (state, action) => {
    switch(action.type) {
      case 'change color':
        return {...state, color: action.payload}
      case 'change icon position':
        return {...state, iconPosition: action.payload}
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  let value = {state, dispatch};


  const ButtonContext  = createContext(value)
  const {state: { color, width, isLoading, size ,iconPosition ,disabled }} = useContext(ButtonContext);

  return (
    <ButtonContext.Provider value={value}>
      <div>
        <select onChange={(e) => dispatch({type: 'change color', payload: e.target.value})}>
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
        </select>
      </div>
      <Background>
        <Button
          color={color}
          width={width}
          isLoading={isLoading}
          size={size}
          iconPosition={iconPosition}
          disabled={disabled}
        >
          Button
        </Button>
      </Background>
    </ButtonContext.Provider>
  )
}

export default ButtonPage;