export class ErrorMessageValidation {
  static toBeNotEmpty() {
    return 'должен быть заполнен';
  }

  static toBeArray() {
    return 'должен быть массивом';
  }

  static toBeString() {
    return 'должен быть строкой';
  }

  static toBeNumber() {
    return 'должен быть числом';
  }

  static toBeBoolean() {
    return 'должен быть boolean';
  }

  static toBeNotLessThan(length: number) {
    return `длина должна быть не меньше ${length} символов`;
  }

  static toBeLength(length: number) {
    return `длина должна быть ${length} символов`;
  }

  static toBeNotMoreThan(length: number) {
    return `длина должна быть не больше ${length} символов`;
  }

  static toBeNotLessNumberThan(length: number) {
    return `число не должно быть меньше ${length}`;
  }

  static toBeNotMoreNumberThan(length: number) {
    return `число не должно быть больше ${length}`;
  }

  static toBeEmail() {
    return `некорректная запись почты`;
  }

  static toBePhoneNumber() {
    return `некорректный номер телефона`;
  }

  static toBeDate() {
    return `некорректная дата`;
  }

  static toBeAlreadyExisted(name: string) {
    return `${name} уже существует`;
  }

  static notFound(name: string) {
    return `запрошенный ${name} не найден`;
  }
}
