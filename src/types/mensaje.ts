import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class Mensaje {
  @Expose()
  @IsString()
  contenido: string;

  @Expose()
  @IsString()
  fechaEnvio: string;
}
