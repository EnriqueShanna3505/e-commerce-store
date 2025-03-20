import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();
//redis is to stored the refresh/access tokens
export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
