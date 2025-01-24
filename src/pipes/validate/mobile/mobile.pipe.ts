import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class MobilePipe implements PipeTransform {
  constructor(private readonly mobileLength: number) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const mobile: string = value.mobile;
    if (mobile) {
      if (mobile.length != this.mobileLength)
        throw new BadRequestException(
          `valiadtion feild! mobile length must be ${this.mobileLength} character`,
        );
      if (mobile.startsWith('091')) value.operator = 'T-mobile';
      else if (mobile.startsWith('093')) value.operator = 'O2';
    }
    return value;
  }
}
