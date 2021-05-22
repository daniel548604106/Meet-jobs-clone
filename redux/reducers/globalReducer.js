import { TOGGLE_SEARCH_BAR } from '../types';

const initialState = {
  isSearchBarShow: false,
};

export const globalReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_SEARCH_BAR:
      return { ...initialState, isSearchBarShow: !state.isSearchBarShow };
    default:
      return state;
  }
};
