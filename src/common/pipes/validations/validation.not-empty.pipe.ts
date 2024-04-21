import { ArgumentMetadata, Injectable } from '@nestjs/common';
import { ValidationPipe } from './validation.pipe';
import { ObjectHelper } from '../../helpers/object.helper';
import { ValidationException } from '../../exceptions/validation.exception';
import { ErrorMessageHttp } from '../../error-message/error-message.http';

@Injectable()
export class ValidationNotEmptyPipe extends ValidationPipe {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    if (ObjectHelper.isEmpty(value)) throw new ValidationException({ message: ErrorMessageHttp.toBeNotEmptyBody() });

    return super.transform(value, metadata);
  }
}
