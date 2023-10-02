import { Expose, Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { Usuario } from 'src/usuario/usuario.model';

export class Chat {
  @Expose()
  @ValidateNested()
  @Type(() => Usuario)
  emisor: Usuario;

  @Expose()
  @IsString()
  mensaje: string;

  @Expose()
  @IsString()
  fechaEnvio: string;

  @Expose()
  @ValidateNested()
  @Type(() => Usuario)
  receptor?: Usuario;
}

export class ChatResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => Chat)
  chats: Chat[];
}
