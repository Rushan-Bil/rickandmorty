import { initState } from "../initState";

export const charactersReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_DATA':
      return {
        ...state,
        data: payload,
      };

    case 'SET_CHARACTERS':
      return {
        ...state,
        characters: payload,
      };

    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: payload,
      };

    default:
      return state;
  }
}
