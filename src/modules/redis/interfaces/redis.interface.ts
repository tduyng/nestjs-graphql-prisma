import { RedisOptions } from 'ioredis';
import { ModuleMetadata, Type } from '@nestjs/common';

export interface RedisModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<RedisOptionsFactory>;
  useExisting?: Type<RedisOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<RedisModuleOptions> | RedisModuleOptions;
}

export interface RedisOptionsFactory {
  createRedisOptions(): Promise<RedisModuleOptions> | RedisModuleOptions;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedisModuleOptions extends RedisOptions {}
