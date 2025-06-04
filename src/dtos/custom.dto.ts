import {
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CustomDto {
  @IsString({ message: 'string daal name me' })
  @IsNotEmpty()
  name: string;
  @IsNumber()
  age: number;
}
