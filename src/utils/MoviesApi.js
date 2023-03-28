import errors from './errors.js'


class MoviesApi {
  constructor(options) {
    this._options = options
  }

  // --- работа с фильмами

  getMovies() {
    return fetch(this._url('beatfilm-movies'), this._init())
      .then(this._handleResponse)
      .then((movies) => movies.map(this._toMovie))            
      .catch(e => {
        e.message = errors.GENERAL(e.message)
        throw e
      })
  }

  // --- вспомогательные приватные методы
  _url(path) {
    return `${this._options.baseUrl}/${path}`
  }

  _init(config = {}) {
    config.headers = {
      ...config.headers,
      ...this._options.headers,
    }
    return config
  }

  _toMovie (movieData) {
    const movie = { ...movieData }
    movie.movieId = movie._id =movie.id
    delete movie.id
    delete movie.created_at
    delete movie.updated_at
    movie.image = movie.thumbnail = `https://api.nomoreparties.co${movie.image.url}`
    return movie
  }

  _handleResponse(res) {
    if (res.ok) return res.json()
    if (res.status === '404')
      return Promise.reject(new Error(errors.RESOURCE_NOT_FOUND))
    if (res.status === '500')
      return Promise.reject(new Error(errors.SERVER_FAILURE))
    return Promise.reject(new Error(res.status))
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default moviesApi
