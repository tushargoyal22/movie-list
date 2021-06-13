import { ADD_MOVIES } from '../actions';

const initialState = [];
export default function movies(state = initialState, { type, movies }) {
  console.log('type', type);
  switch (type) {
    case ADD_MOVIES:
      return movies;

    default:
      return state;
  }
}
