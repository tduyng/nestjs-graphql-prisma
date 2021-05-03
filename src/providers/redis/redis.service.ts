import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private _redisClient;
  constructor() {
    this._redisClient = new Redis();
  }
  get client() {
    return this._redisClient as Redis.Redis;
  }
}

// DEFAULT_REDIS_OPTIONS = {
//   // Connection
//   port: 6379,
//   host: 'localhost',
//   family: 4,
//   connectTimeout: 10000,
//   retryStrategy: function (times) {
//       return Math.min(times * 50, 2000);
//   },
//   keepAlive: 0,
//   noDelay: true,
//   connectionName: null,
//   // Sentinel
//   sentinels: null,
//   name: null,
//   role: 'master',
//   sentinelRetryStrategy: function (times) {
//       return Math.min(times * 10, 1000);
//   },
//   natMap: null,
//   enableTLSForSentinelMode: false,
//   updateSentinels: true,
//   // Status
//   password: null,
//   db: 0,
//   // Others
//   dropBufferSupport: false,
//   enableOfflineQueue: true,
//   enableReadyCheck: true,
//   autoResubscribe: true,
//   autoResendUnfulfilledCommands: true,
//   lazyConnect: false,
//   keyPrefix: '',
//   reconnectOnError: null,
//   readOnly: false,
//   stringNumbers: false,
//   maxRetriesPerRequest: 20,
//   maxLoadingRetryTime: 10000
// };
