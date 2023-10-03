import { Expose, Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { Usuario } from 'src/types/usuario';
import { Mensaje } from './mensaje';

export class Conversacion {
  @Expose()
  @ValidateNested()
  @Type(() => Usuario)
  emisor: Usuario;

  @Expose()
  @ValidateNested()
  @Type(() => Mensaje)
  mensaje: Mensaje;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => Usuario)
  receptor: Usuario;
}
