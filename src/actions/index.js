export const fetchData = (payload) => {
  return async (dispatch) => {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();

    dispatch({
      type: 'FETCH_DATA',
      payload: data,
    });
  };
};
