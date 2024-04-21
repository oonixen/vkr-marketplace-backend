export class ErrorMessageHttp {
  static toBeUnauthorized() {
    return 'Unauthorized';
  }

  static toBeNotEmptyBody() {
    return 'Тело запроса не должно быть пустым';
  }
}
