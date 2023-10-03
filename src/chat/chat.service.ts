import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConversacionDocument } from './chat.schema';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import { Chat } from './chat.model';
import { Conversacion } from 'src/types/conversacion';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ConversacionDocument.name)
    private readonly chatModel: Model<ConversacionDocument>,
  ) {}

  public async obtenerTodosLosChats(): Promise<Chat> {
    const chats = await this.chatModel.find().exec();
    return plainToInstance(
      Chat,
      { chats: chats },
      { excludeExtraneousValues: true },
    );
  }

  public guardarChat(chat: Conversacion): Conversacion {
    const nuevoChat = new this.chatModel(chat);
    const chatCreado = nuevoChat.save();
    return plainToInstance(Conversacion, chatCreado, {
      excludeExtraneousValues: true,
    });
  }

  public obtenerChatsPorEmailEmisor(email: string) {
    return this.obtenerChatsPorEmailDeUnUsuario(`emisor.email`, email);
  }

  public obtenerChatsPorEmailReceptor(email: string) {
    return this.obtenerChatsPorEmailDeUnUsuario(`receptor.email`, email);
  }

  public async obtenerChatsPorEmailEmisorYEmailReceptor(
    emailEmisor: string,
    emailReceptor: string,
  ) {
    const chats = await this.chatModel
      .find({ 'emisor.email': emailEmisor, 'receptor.email': emailReceptor })
      .exec();

    return plainToInstance(
      Chat,
      { chats: chats },
      { excludeExtraneousValues: true },
    );
  }

  private async obtenerChatsPorEmailDeUnUsuario(
    usuario: string,
    email: string,
  ) {
    const chats = await this.chatModel.find({ [usuario]: email }).exec();

    return plainToInstance(
      Chat,
      { chats: chats },
      { excludeExtraneousValues: true },
    );
  }
}
