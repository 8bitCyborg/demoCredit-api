import { RateLimiterMemory } from 'rate-limiter-flexible';

//1 request per second per IP
export const limiter = new RateLimiterMemory({
  points: 1,
  duration: 1,
});