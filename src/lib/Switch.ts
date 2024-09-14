import { EventEmitter } from 'events';

export class Switch {
  private pin: Pin;
  private watcherId: WatcherId | null = null;

  constructor(pin: Pin) {
    this.pin = pin;
  }

  onChange(callback: (newState: State) => void) {
    this.close();
    pinMode(this.pin, INPUT_PULLUP);

    this.watcherId = setWatch(() => {
      callback(this.read());
    }, this.pin, CHANGE, 10);
  }

  read() {
    return digitalRead(this.pin);
  }

  close() {
    if (this.watcherId) {
      clearWatch(this.watcherId);
      this.watcherId = null;
    }
  }
}
