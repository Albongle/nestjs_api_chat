import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ChatDocument } from './chat.model';
import { Model } from 'mongoose';
import { ChatDTO, ChatResponse } from './chat.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(ChatDocument.name)
    private readonly chatModel: Model<ChatDocument>,
  ) {}

  public async getAllChats(): Promise<ChatResponse> {
    const chats = await this.chatModel.find();
    return plainToInstance(
      ChatResponse,
      { chats: chats },
      { excludeExtraneousValues: true },
    );
  }

  public saveChat(chat: ChatDTO): Promise<ChatDocument> {
    const createChat = new this.chatModel(chat);
    return createChat.save();
  }
}
