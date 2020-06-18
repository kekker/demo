import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext(null);

const initialState = {
  CHANNEL: '',
  AUTHORIZATION: '',
};

function valuesStateReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_CHANNEL':
      return { ...state, CHANNEL: action.value };

    case 'UPDATE_AUTHORIZATION':
      return { ...state, AUTHORIZATION: action.value };

    default:
      return state;
  }
}

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(valuesStateReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppState() {
  return useContext(AppContext);
}
