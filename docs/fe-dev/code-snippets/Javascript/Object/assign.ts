export function assign<T>(obj: Partial<T>, ...objs: Partial<T>[]): T {
  return Object.assign(obj, ...objs)
}
