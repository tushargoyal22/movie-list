const initialState = [];

export default (state = initialState, { type, movies }) => {
  switch (type) {
    case 'ADD_MOVIES':
      return movies;

    default:
      return state;
  }
};
