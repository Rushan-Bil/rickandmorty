import axios from 'axios';

export const setData = (value) => {
  return {
    type: 'SET_DATA',
    payload: value
  }
}
export const setCharacters = (value) => {
  return {
    type: 'SET_CHARACTERS',
    payload: value
  }
}
export const getCharacters = () => async (dispatch) => {
  try {
    const res = await axios(`https://rickandmortyapi.com/api/character`);
    dispatch(setData(res.data));
    dispatch(setCharacters(res.data.results));
  } catch (error) {
    dispatch(setCharacters([]));
    console.log(error);
  }
}

export const getNewCharacters = (page, name, statuss, gender) => async (dispatch) => {
  try {
    const res = await axios(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${statuss}&gender=${gender}`);
    dispatch(setData(res.data));
    dispatch(setCharacters(res.data.results));
  } catch (error) {
    dispatch(setCharacters([]));
    console.log(error);
  }
}

export const setCurrentPage = (value) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: value
  }
}
