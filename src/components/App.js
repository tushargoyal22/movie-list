import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { data } from '../data';
import { addMovies } from '../actions';

class App extends React.Component {
  componentDidMount() {
    // make an api call
    // dispatch action
    const { store } = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });

    // store.dispatch({
    //   type: 'ADD_MOVIES',
    //   movies: data,
    // });

    store.dispatch(addMovies(data));

    console.log(
      'State- after componentDidMount call',
      this.props.store.getState()
    );
  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const idx = favourites.indexOf(movie);
    return idx !== -1;
  };

  render() {
    const { list } = this.props.store.getState();
    console.log('RENDER', this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
