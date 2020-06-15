const initialState = {
  characters: [],
};

const charactersReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_DATA') {
    return Object.assign({}, state, { characters: action.payload.results });
  }
  return state;
};

export default charactersReducer;
