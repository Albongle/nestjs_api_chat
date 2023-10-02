import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatDocument, ChatSchema } from './chat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ChatDocument.name, schema: ChatSchema },
    ]),
  ],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
