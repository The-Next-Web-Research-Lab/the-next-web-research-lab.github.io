namespace InputDevices {
  export class Gestures {
    output: OutputDevices.OutputInterface;

    constructor (output) {
      this.output = output
    }
    tap () { this.output.click() }
    swipe () { this.output.move() }
    pan () { this.output.drag() }
    pinch () { this.output.zoom() }
  }

  export class Mouse {
    output: OutputDevices.OutputInterface;

    constructor (output) {
      this.output = output
    }
    click () { this.output.click() }
    move () { this.output.move() }
    down () { this.output.drag() }
    wheel () { this.output.zoom() }
  }
}

namespace OutputDevices {
  export interface OutputInterface {
    click: () => void
    move: () => void
    drag: () => void
    zoom: () => void
  }

  export class Screen implements OutputInterface {
    click () { console.log('Screen select') }
    move () { console.log('Screen move') }
    drag () { console.log('Screen drag') }
    zoom () { console.log('Screen zoom in') }
  }

  export class Audio implements OutputInterface {
    click () { console.log('Sound oink') }
    move () { console.log('Sound waves') }
    drag () { console.log('Sound screetch') }
    zoom () { console.log('Sound volume up') }
  }
}

const outputScreen = new OutputDevices.Screen();
const outputAudio = new OutputDevices.Audio();

const hand = new InputDevices.Gestures(outputScreen);
const mouse = new InputDevices.Mouse(outputAudio);

hand.tap();
hand.swipe();
hand.pinch();
hand.pan();

mouse.click();
mouse.move();
mouse.wheel();
mouse.down();
