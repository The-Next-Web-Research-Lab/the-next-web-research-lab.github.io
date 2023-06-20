export class ContextmenuHelper<T> {
  private static instance: ContextmenuHelper<any> | null = null
  private contextmenuInstance: T | null = null
  private isMounted = false
  static create<T>(): ContextmenuHelper<T> {
    if (!this.instance) {
      this.instance = new ContextmenuHelper<T>()
    }
    return this.instance
  }

  public mounted(): void {
    if (this.isMounted) {
      return
    }
    this.isMounted = true
    document.addEventListener('click', () => {
      this.close()
    })
  }

  public open(instance: T): void {
    setTimeout(() => {
      this.contextmenuInstance = instance
    })
  }

  public close(): void {
    requestAnimationFrame(() => {
      this.contextmenuInstance = null
    })
  }

  public isOpen(instance: T): boolean {
    return this.contextmenuInstance === instance
  }
}
