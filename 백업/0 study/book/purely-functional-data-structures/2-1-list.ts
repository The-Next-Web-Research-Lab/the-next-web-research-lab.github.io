type STACK<T> = {
  readonly empty: T[]
  isEmpty(stack: T[]): boolean
  cons(item: T, stack: T[]): T[]
  head(stack: T[]): T
  tail(stack: T[]): T[]
}

const List: STACK<any> = {
  empty: [],
  isEmpty(stack: any[]): boolean {
    return !!stack.length
  },
  cons(item: any, stack: any[]): any[] {
    return [item, ...stack]
  },
  head([head]: any[]): any {
    return head
  },
  tail([, ...tail]: any[]): any[] {
    return tail
  }
}

const emptyList = List.empty // []
const oneList = List.cons(1, emptyList) // [ 1 ]
const twoList = List.cons(2, oneList) // [ 2, 1 ]

const head = List.head(twoList) // 2
const tail = List.tail(twoList) // [ 1 ]
