import React, { Component } from 'react'
import moment from 'moment'
import axios from 'axios'

import './App.css'

import Movie from './Movie'

class App extends Component {
  constructor() {
    super()

    this.state = {
      movies: []
    }
  }
  componentDidMount = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=1db0d81254a2122da9791ebfe247e640'
      )
      .then(response => {
        console.log(response)
        this.setState({
          movies: response.data.results
        })
      })
  }

  render() {
    const baseURL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
    return (
      <main>
        <header>
          <h1>Movies of 1989!</h1>
        </header>
        <div>
          {this.state.movies
            .sort(function(a, b) {
              return new Date(a.release_date) - new Date(b.release_date)
            })
            .map((movie, index) => {
              return (
                <Movie
                  key={index}
                  title={movie.title}
                  src={`${baseURL}${movie.poster_path}`}
                  overview={movie.overview}
                  release_date={moment(movie.release_date).format('MMM Do YY')}
                />
              )
            })}
        </div>
      </main>
    )
  }
}

export default App
