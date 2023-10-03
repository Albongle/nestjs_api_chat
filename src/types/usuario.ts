import { Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class Usuario {
  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  nombre: string;

  @Expose()
  @IsString()
  apellido: string;

  @Expose()
  @IsNumber()
  edad: number;
}
