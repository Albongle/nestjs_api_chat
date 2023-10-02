import { Expose, Type } from 'class-transformer';
import { IsDate, IsString, ValidateNested } from 'class-validator';

export class ChatDTO {
  @Expose()
  @IsString()
  usuario: string;

  @Expose()
  @IsString()
  mensaje: string;

  @Expose()
  @IsDate()
  fecha: string;
}

export class ChatResponse {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => ChatDTO)
  chats: ChatDTO[];
}
