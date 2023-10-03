import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from './chat.model';

@Controller({ path: 'chat', version: ['1'] })
export class ChatController {
  constructor(private readonly chatService: ChatService) {}
  @Get()
  public obtenerTodosLosMensajes() {
    return this.chatService.obtenerTodosLosChats();
  }

  @Get('/buscar')
  public obtenerMensajesPorEmailEmisor(
    @Query('emailEmisor') emailEmisor: string,
    @Query('emailReceptor') emailReceptor: string,
  ) {
    if (!emailEmisor && !emailReceptor) {
      throw new BadRequestException(
        'Parametros de busqueda requeridos [emailEmisor o emailReceptor]',
      );
    }

    if (emailEmisor && emailReceptor) {
      return this.chatService.obtenerChatsPorEmailEmisorYEmailReceptor(
        emailEmisor,
        emailReceptor,
      );
    } else if (emailReceptor) {
      return this.chatService.obtenerChatsPorEmailReceptor(emailReceptor);
    }
    return this.chatService.obtenerChatsPorEmailEmisor(emailEmisor);
  }

  @Post()
  public guardarMensaje(@Body() nuevoChat: Chat) {
    return this.chatService.guardarChat(nuevoChat);
  }
}
