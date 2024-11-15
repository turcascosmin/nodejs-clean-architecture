import { IsString } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  carMake!: string;

  @IsString()
  carModel!: string;

  @IsString()
  color!: string;
}
