class MainApi {
  constructor(options) {
    this._options = options
  }

  // --- работа с авторизацией
  signup(name, email, password) {
    const config = {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }
    return fetch(this._url('signup'), this._init(config))
      .then(this._handleResponse)
      .then((res) => ({ _id: res._id, name: res.name, email: res.email }))
  }

  signin(email, password) {
    const config = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    }
    return fetch(this._url('signin'), this._init(config))
      .then(this._handleResponse)
      .then((res) => {
        localStorage.setItem('jwt', res.token)
        return res.token
      })
  }

  // --- работа с профилем пользователя
  getUserInfo() {
    return fetch(this._url('users/me'), this._init())
      .then(this._handleResponse)
      .then((userInfo) => this._toUserInfo(userInfo))
  }

  setUserInfo(data) {
    const config = {
      method: 'PATCH',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }
    return fetch(this._url('users/me'), this._init(config))
      .then(this._handleResponse)
      .then((userInfo) => this._toUserInfo(userInfo))
  }

  // --- работа с фильмами

  getSavedMovies() {
    return fetch(this._url('movies'), this._init())
      .then(this._handleResponse)
      .then((movies) => movies.data.map(this._toMovie))            
  }

  addSavedMovie(movie) {
    const config = {
      method: 'POST',
      body: JSON.stringify(movie),
    }
    return fetch(this._url('movies'), this._init(config))
      .then(this._handleResponse)
      .then((movie) => this._toMovie(movie.data))
  }

  removeSavedMovie(id) {
    const config = {
      method: 'DELETE',
    }
    return fetch(this._url(`movies/${id}`), this._init(config))
      .then(this._handleResponse)
      .then((movie) => this._toMovie(movie.data))
  }

  // --- вспомогательные приватные методы
  _url(path) {
    return `${this._options.baseUrl}/${path}`
  }

  _init(config = {}) {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      ...config.headers,
      ...this._options.headers,
    }
    return config
  }

  _toUserInfo(userInfo) {
    userInfo = userInfo.data
    return {
      _id: userInfo._id,
      name: userInfo.name,
      email: userInfo.email,
    }
  }

  _toMovie (movieData) {
    const movie = { ...movieData }
    delete movie.__v
    return movie
  }

  _handleResponse(res) {
    if (res.ok) return res.json()
    return Promise.reject(`Request failed: ${res.status}`)
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default mainApi