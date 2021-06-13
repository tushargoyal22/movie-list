import Navbar from './Navbar';
import MovieCard from './MovieCard';
import React from 'react';
import { data } from '../data';

class App extends React.Component {
  componentDidMount() {
    // make an api call
    // dispatch action
    const { store } = this.props;
    store.subscribe(() => {
      console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data,
    });

    console.log(
      'State- after componentDidMount call',
      this.props.store.getState()
    );
  }

  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
