import * as actionTypes from "./actions";
// import axios from '../axios-add-movies';

const initialSate = {
  clickedMovie: ''

};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case actionTypes.CLICK_ON_MORE_DETAILS:
      return {
        ...state.clickedMovie,
        clickedMovie: action.clickedMovie
      };
    default:
      return state;
  }

}

export default reducer;
