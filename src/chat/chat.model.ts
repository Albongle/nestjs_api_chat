import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ChatDocument extends Document {
  @Prop()
  usuario: string;
  @Prop()
  mensaje: string;
  @Prop()
  fecha: string;
}

export const ChatSchema = SchemaFactory.createForClass(ChatDocument);
