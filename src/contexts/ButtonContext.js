import React from 'react'

const ButtonContext = React.createContext();

export const ButtonProvider = ButtonContext.Provider;
export const ButtonConsumer = ButtonContext.Consumer;

export default ButtonContext;