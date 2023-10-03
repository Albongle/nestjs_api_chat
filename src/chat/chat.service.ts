import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ChatDocument } from './chat.schema';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import { Chat, ChatResponse } from './chat.model';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ChatDocument.name)
    private readonly chatModel: Model<ChatDocument>,
  ) {}

  public async obtenerTodosLosChats(): Promise<ChatResponse> {
    const chats = await this.chatModel.find().exec();
    return plainToInstance(
      ChatResponse,
      { chats: chats },
      { excludeExtraneousValues: true },
    );
  }

  public guardarChat(chat: Chat): Chat {
    const nuevoChat = new this.chatModel(chat);
    const chatCreado = nuevoChat.save();
    return plainToInstance(Chat, chatCreado, { excludeExtraneousValues: true });
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
      ChatResponse,
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
      ChatResponse,
      { chats: chats },
      { excludeExtraneousValues: true },
    );
  }
}
