import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class LoginPipe implements PipeTransform {
  constructor(private readonly schema) {}

  /**
   * 转换
   * @param value
   * @param metadata
   * @returns
   */
  transform(value: any, metadata: ArgumentMetadata) {
    const e = this.schema.validate(value);
    if (e) {
      const error = e.error;
      return {
        error: error.details[0].message,
      };
    }
    return value;
  }
}
