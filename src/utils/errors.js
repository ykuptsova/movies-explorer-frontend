const errors = {

  LOGIN_WRONG_CREDENTIALS: 'Вы ввели неправильный логин или пароль.',
  LOGIN_GENERAL: 'При авторизации произошла ошибка.',

  REGISTER_DUPLICATE: 'Пользователь с таким email уже существует.',
  REGISTER_GENERAL: 'При регистрации пользователя произошла ошибка.',

  // PROFILE_DUPLICATE: 'Пользователь с таким email уже существует.',
  // PROFILE_GENERAL: 'При обновлении профиля произошла ошибка.',
  // PROFILE_WRONG_TOKEN: 'При обновлении профиля произошла ошибка. Переданный токен некорректен.',
  // PROFILE_MISSING_TOKEN: 'При обновлении профиля произошла ошибка. Токен не передан или передан не в том формате.',

  RESOURCE_NOT_FOUND: 'Страница по указанному маршруту не найдена.',
  SERVER_FAILURE: 'На сервере произошла ошибка.',
  
  GENERAL: message => `${message}: Что то пошло не так.`,

}


export default errors;