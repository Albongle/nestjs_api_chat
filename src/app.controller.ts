import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  public bienvenido() {
    return 'Bienvenido a la api chat de programacion y laboratorio 2';
  }
}
