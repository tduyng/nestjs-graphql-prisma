import { ISessionOption } from '@common/environment/environment.interface';
import { REDIS_KEY_SESSION } from '@modules/redis/redis.constant';
import connectRedis from 'connect-redis';
import session from 'express-session';

export const sessionConfig = (redisClient, sessionEnv: ISessionOption) => {
  const RedisStore = connectRedis(session);
  return {
    store: new RedisStore({
      client: redisClient as any,
    }),
    name: REDIS_KEY_SESSION,
    secret: sessionEnv.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    },
  };
};
