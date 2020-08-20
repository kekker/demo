import React, { createContext, useReducer, useContext } from 'react';

const PageContext = createContext(null);

const initialState = {
  QUEUEID_Quorum: '',
  LOCALDEALID_Quorum: '',
  DEALID_Quorum: '',
  QUEUEID_Ethereum: '',
  LOCALDEALID_Ethereum: '',
  DEALID_Ethereum: '',
  QUEUEID_Hyperledger: '',
  LOCALDEALID_Hyperledger: '',
  DEALID_Hyperledger: '',
  ActiveTab: 'Quorum',
  rect: null,
};

function valuesStateReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_QUEUEID_Ethereum':
      return { ...state, QUEUEID_Ethereum: action.value };

    case 'UPDATE_LOCALDEALID_Ethereum':
      return { ...state, LOCALDEALID_Ethereum: action.value };

    case 'UPDATE_DEALID_Ethereum':
      return { ...state, DEALID_Ethereum: action.value };

    case 'UPDATE_QUEUEID_Hyperledger':
      return { ...state, QUEUEID_Hyperledger: action.value };

    case 'UPDATE_LOCALDEALID_Hyperledger':
      return { ...state, LOCALDEALID_Hyperledger: action.value };

    case 'UPDATE_DEALID_Hyperledger':
      return { ...state, DEALID_Hyperledger: action.value };

    case 'UPDATE_QUEUEID_Quorum':
      return { ...state, QUEUEID_Quorum: action.value };

    case 'UPDATE_LOCALDEALID_Quorum':
      return { ...state, LOCALDEALID_Quorum: action.value };

    case 'UPDATE_DEALID_Quorum':
      return { ...state, DEALID_Quorum: action.value };

    case 'SET_ACTIVE_TAB':
      return { ...state, ActiveTab: action.value };

    case 'SET_PAGE_RECT':
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
