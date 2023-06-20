export class ToggleHelper {
  private state: boolean
  private constructor(state: boolean) {
    this.state = state
  }
  on(): void {
    this.state = true
  }
  off(): void {
    this.state = false
  }
  toggle(): void {
    this.state = !this.state
  }
  get isOn(): boolean {
    return this.state
  }
  static create(state: boolean): ToggleHelper {
    return new ToggleHelper(state)
  }
}
