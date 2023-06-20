const toLinkedListItem = (base, parent = null, propName = null) => {
  return {
    base,
    parent,
    propName,
    copy: null,
  }
}

const changeLinkedList = (state, propName, value) => {
  if (state.copy) {
    state.copy[propName] = value
  } else {
    state.copy = Object.assign({}, state.base, {[propName]: value})
  }

  if (state.parent) {
    changeLinkedList(state.parent, state.propName, state.copy)
  }
}

const createProxy = (base, revokes, parentState, propName) => {
  const state = toLinkedListItem(base, parentState, propName)
  const handler = {
    get (target, key) {
      const value = state.copy ? state.copy[key] : state.base[key]
      if (typeof value === 'object') {
        const {proxy} = createProxy(value, revokes, state, key)
        return proxy
      } else {
        return value
      }
    },
    set (target, key, value) {
      console.log('SET', target, key, value)
      changeLinkedList(state, key, value)
    }
  }

  const {proxy, revoke} = Proxy.revocable(base, handler)
  revokes.push(revoke)
  return {proxy, revoke, revokes, state}
}

const produce = (base, fn) => {
  const {proxy, revokes, state} = createProxy(base, [])

  fn(proxy)
  revokes.forEach(fn => fn())

  return state.copy ? state.copy : state.base
}