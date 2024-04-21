import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../../exceptions/validation.exception';
import { ObjectHelper } from '../../helpers/object.helper';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const plainValue = ObjectHelper.isObject(value) ? value : {};
    const obj = plainToInstance(metadata.metatype, plainValue);
    const errors = await validate(obj);

    if (errors.length) {
      const errorsArr = errors.map((err) => {
        return `${err.property}: ${Object.values(err.constraints).join(', ')}`;
      });
      throw new ValidationException({
        message: errorsArr[0],
        errors: errorsArr,
      });
    }

    return value;
  }
}
