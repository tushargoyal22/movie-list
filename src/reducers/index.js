import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES } from '../actions';

const initialState = {
  list: [],
  favourites: [],
};

export default function movies(state = initialState, action) {
  console.log('action_type', action.type);
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      console.log('filteredArray: ', filteredArray);

      return {
        ...state,
        favourites: filteredArray,
      };

    default:
      return state;
  }
}
