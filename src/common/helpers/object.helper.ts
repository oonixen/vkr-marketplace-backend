export class ObjectHelper {
  static isObject(value: any): boolean {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
  }

  static isEmpty(value: any): boolean {
    return !value || Object.keys(value).length === 0;
  }
}
