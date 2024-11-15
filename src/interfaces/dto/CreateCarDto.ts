import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  carMake!: string;

  @IsString()
  carModel!: string;

  @IsString()
  color!: string;
}
