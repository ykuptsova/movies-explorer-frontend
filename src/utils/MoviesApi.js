class MoviesApi {
  constructor(options) {
    this._options = options
  }

  // --- работа с фильмами

  getMovies() {
    return fetch(this._url('beatfilm-movies'), this._init())
      .then(this._handleResponse)
      .then((movies) => movies.map(this._toMovie))            
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
    return Promise.reject(`Request failed: ${res.status}`)
  }
}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default moviesApi
