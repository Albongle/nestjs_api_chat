import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConversacionDocument, ConversacionSchema } from './chat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ConversacionDocument.name, schema: ConversacionSchema },
    ]),
  ],
  providers: [ChatService],
  controllers: [ChatController],
})
export class ChatModule {}
