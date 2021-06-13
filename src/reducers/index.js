const initialState = [];

export default function movies(state = initialState, { type, movies }) {
  switch (type) {
    case 'ADD_MOVIES':
      return movies;

    default:
      return state;
  }
}
