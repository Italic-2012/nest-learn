/**
 * 全局中间件
 */

export function logger(req: any, res: any, next: () => void) {
  console.log('全局中间件');
  next();
}
