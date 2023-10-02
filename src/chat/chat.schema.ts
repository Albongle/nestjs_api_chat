import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Usuario } from 'src/usuario/usuario.model';

@Schema()
export class ChatDocument extends Document {
  @Prop({ required: true })
  emisor: Usuario;

  @Prop()
  mensaje: string;
  @Prop()
  fechaEnvio: string;

  @Prop()
  receptor: Usuario;
}

export const ChatSchema = SchemaFactory.createForClass(ChatDocument);
