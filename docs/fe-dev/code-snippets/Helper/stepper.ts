export class Stepper {
  readonly min: number
  readonly max: number
  readonly step: number
  private position: number

  private constructor(min: number, max: number, step: number, position: number) {
    this.min = min
    this.max = max
    this.step = step
    this.position = position
  }

  get isMax(): boolean {
    return this.position === this.max
  }
  get isMin(): boolean {
    return this.position === this.min
  }
  get currentPosition(): number {
    return this.position
  }

  next(): void {
    this.changePosition(this.position + this.step)
  }
  prev(): void {
    this.changePosition(this.position - this.step)
  }
  moveTo(position: number): void {
    this.changePosition(position)
  }

  private changePosition(position: number): void {
    this.position = this.calibratePosition(position)
  }
  private calibratePosition(position: number): number {
    return position > this.max
      ? this.max
      : position < this.min
        ? this.min
        : position
  }

  static create(max: number): Stepper {
    return new Stepper(1, max, 1, 1)
  }
}
