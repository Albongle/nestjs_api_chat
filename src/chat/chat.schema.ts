import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Mensaje } from 'src/types/mensaje';
import { Usuario } from 'src/types/usuario';

@Schema()
export class ConversacionDocument extends Document {
  @Prop({ required: true })
  emisor: Usuario;

  @Prop()
  mensaje: Mensaje;
  @Prop()
  receptor: Usuario;
}

export const ConversacionSchema =
  SchemaFactory.createForClass(ConversacionDocument);
