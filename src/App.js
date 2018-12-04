import React, { Component } from 'react'
import moment from 'moment'
import logo from './logo.svg'
import './App.css'
import data from './data.json'
import Movie from './Movie'

class App extends Component {
  render() {
    const baseURL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
    return (
      <main>
        <header>
          <h1>Movies of 1989!</h1>
        </header>
        <div>
          {data.results
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
