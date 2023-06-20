const from = iter => Array.from(iter)

export const map = (mapper, iterable) => {
  return from(iterable).map(mapper)
}

export const filter = (predicate, iterable) => {
  return from(iterable).filter(predicate)
}

export const join = (sep, iter) => from(iter).join(sep)

export const size = (iterable) => from(iterable).length