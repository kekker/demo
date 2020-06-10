const initialState = {
  ClasterType: 0,
  CHANNEL: '',
  UID: '',
  AUTHORIZATION: ''
};

const valuesStateReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CHANNEL':
      return { ...state, CHANNEL: action.value };

    case 'UPDATE_UID':
      return { ...state, UID: action.value };

    case 'UPDATE_AUTHORIZATION':
      return { ...state, AUTHORIZATION: action.value };

    case 'UPDATE_CLASTERTYPE':
      return { ...state, ClasterType: action.value };

    default:
      return state;
  }
};

export { initialState };
export default valuesStateReducer;
