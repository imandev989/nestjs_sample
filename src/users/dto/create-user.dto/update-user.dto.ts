import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @MinLength(3)
  @MaxLength(15)
  @IsString()
  username: string;
}
