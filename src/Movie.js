import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div className="movie-info">
        <h3>{this.props.title}</h3>
        <div className="wrapper">
          <div className="left">
            <img src={this.props.src} />
          </div>
          <div className="right">
            <p>{this.props.overview}</p>
            <p>Release date: {this.props.release_date}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
