const errors = {

  LOGIN_WRONG_CREDENTIALS: 'Вы ввели неправильный логин или пароль.',
  LOGIN_WRONG_TOKEN: 'При авторизации произошла ошибка. Переданный токен некорректен.',
  LOGIN_MISSING_TOKEN: 'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',

  REGISTER_DUPLICATE: 'Пользователь с таким email уже существует.',
  REGISTER_GENERAL: 'При регистрации пользователя произошла ошибка.',

  PROFILE_DUPLICATE: 'Пользователь с таким email уже существует.',
  PROFILE_GENERAL: 'При обновлении профиля произошла ошибка.',

  GENERAL: message => `${message}: Что то пошло не так.`,

}


export default errors;