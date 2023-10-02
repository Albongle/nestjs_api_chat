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
    const chats = await this.chatModel.find();
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
}
