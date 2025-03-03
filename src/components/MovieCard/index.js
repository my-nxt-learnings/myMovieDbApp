import {Link} from 'react-router-dom'
import {BsHeartFill} from 'react-icons/bs'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movie-card-container">
      <img className="movie-card-image" alt={title} src={posterPath} />
      <div className="views-visit">
        <div className="title-rating">
          <h1 className="movie-title">{title}</h1>
          <div className="rating-heart">
            <BsHeartFill className="heart-logo" />{' '}
            <span className="movie-rating">Rating: {voteAverage}</span>
          </div>
        </div>
        <Link to={`/movie/${id}`} className="mt-auto align-self-center">
          <button className="view-button" type="button">
            View Details
          </button>
        </Link>
      </div>
    </li>
  )
}

export default MovieCard
