import { environment } from '@common/environments/enviroment';
import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Global()
@Module({
  providers: [{ provide: ConfigService, useValue: environment }],
  exports: [ConfigService],
})
export class ConfigModule {}
