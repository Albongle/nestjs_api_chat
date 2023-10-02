import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from './chat.model';

@Controller({ path: 'chat', version: ['1'] })
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Get()
  public obtenerTodosLosMensajes() {
    return this.chatService.obtenerTodosLosChats();
  }

  @Post()
  public guardarMensaje(@Body() nuevoChat: Chat) {
    return this.chatService.guardarChat(nuevoChat);
  }
}
