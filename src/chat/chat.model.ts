import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Conversacion } from 'src/types/conversacion';

export class Chat {
  @Expose()
  @ValidateNested({ each: true })
  @Type(() => Conversacion)
  chats: Conversacion[];
}
