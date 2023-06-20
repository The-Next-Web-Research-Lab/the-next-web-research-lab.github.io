const state = {
  isMounted: false,
  contextmenu: null,
};

const mount = () => {
  if (state.isMounted) {
    return
  }
  state.isMounted = true;
  document.addEventListener('click', () => {
    this.close()
  })
};

const open = (symbol: Symbol): void => {
  setTimeout(() => {
    state.contextmenu = symbol
  })
};

const close = (): void => {
  requestAnimationFrame(() => {
    state.contextmenu = null
  })
};

const isOpen = (symbol: Symbol): boolean => {
  return state.contextmenu === symbol
};
