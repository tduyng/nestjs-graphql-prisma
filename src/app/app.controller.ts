import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  public async getHello() {
    return this.appService.getHello();
  }
}
