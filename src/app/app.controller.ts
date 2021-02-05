import { LoggingInterceptor } from '@common/global-interceptors/logging.interceptor';
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  public getHello() {
    return this.appService.getHello();
  }
}
