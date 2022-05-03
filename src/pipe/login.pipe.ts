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
    const { error } = this.schema.validate(value);
    if (error) {
      return {
        error: error.details[0].message,
      };
    }
    return value;
  }
}
