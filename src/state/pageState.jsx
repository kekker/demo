import React, { createContext, useReducer, useContext } from 'react';

const PageContext = createContext(null);

const initialState = {
  UID_Quorum: '',
  UID_Ethereum: '',
  UID_Hyperledger: '',
  ActiveTab: 'Quorum'
};

function valuesStateReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_UID_Ethereum':
      return { ...state, UID_Ethereum: action.value };

    case 'UPDATE_UID_Hyperledger':
      return { ...state, UID_Hyperledger: action.value };

    case 'UPDATE_UID_Quorum':
      return { ...state, UID_Quorum: action.value };

    case 'SET_ACTIVE_TAB':
      return { ...state, ActiveTab: action.value };

    default:
      return state;
  }
}

export const PageStateProvider = ({ children }) => {
  const [pageState, pageDispatch] = useReducer(valuesStateReducer, initialState);
  return (
    <PageContext.Provider value={{ pageState, pageDispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export function usePageState() {
  return useContext(PageContext);
}
