class Mediator {
  static instance;

  static create() {
    if (!this.instance) {
      this.instance = new Mediator()
    }
    return this.instance
  }

  contextMenus = [];

  constructor() {}

  register(contextmenu) {
    this.contextMenus.push(contextmenu)
  }

  unregister(contextmenu) {
    this.contextMenus = this.contextMenus.filter((instance) => {
      return instance !== contextmenu
    })
  }

  open(contextmenu) {
    this.contextMenus.forEach((instance) => {
      instance.isOpen = instance === contextmenu;
    })
  }

  closeAll() {
    this.contextMenus.forEach((instance) => {
      instance.isOpen = false;
    })
  }
}

class ContextMenu {
  static create() {
    return new ContextMenu();
  }

  mediator = Mediator.create();
  isOpen = false;

  constructor() {
    this.mediator.register(this)
  }

  remove() {
    this.mediator.unregister(this)
  }

  open() {
    this.mediator.open(this)
  }
}
