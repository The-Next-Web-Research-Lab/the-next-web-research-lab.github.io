import {Stepper} from "./stepper";

const stepper = Stepper.create(3)

console.log(stepper.currentPosition, stepper.min, stepper.max, stepper.isMin, stepper.isMax)
stepper.moveTo(1000)
console.log(stepper.currentPosition, stepper.min, stepper.max, stepper.isMin, stepper.isMax)
stepper.prev()
console.log(stepper.currentPosition, stepper.min, stepper.max, stepper.isMin, stepper.isMax)
stepper.prev()
console.log(stepper.currentPosition, stepper.min, stepper.max, stepper.isMin, stepper.isMax)
stepper.prev()
console.log(stepper.currentPosition, stepper.min, stepper.max, stepper.isMin, stepper.isMax)