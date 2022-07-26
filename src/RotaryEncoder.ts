import { EventEmitter } from 'events';

export class RotaryEncoder extends EventEmitter {
  clk: State;
  clkId: ListenerId;
  dtId: ListenerId;
  swId?: ListenerId;

  constructor(clkPin: Pin, dtPin: Pin, swPin?: Pin) {
    super();
    this.clk = LOW;

    const onChange = () => {
      const _clk = digitalRead(clkPin);
      const _dt = digitalRead(dtPin);
      if (_clk !== this.clk) {
        this.emit('rotate', _dt !== _clk ? 1 : -1);
      }

      this.clk = _clk;
    };

    this.clkId = setWatch(onChange, clkPin, CHANGE);
    this.dtId = setWatch(onChange, dtPin, CHANGE);

    if (typeof swPin === 'number') {
      this.swId = setWatch(
        () => this.emit('click'),
        swPin,
        FALLING,
        10,
      );
    }

    this.clk = digitalRead(clkPin);
  }

  close() {
    clearWatch(this.clkId);
    clearWatch(this.dtId);
    if (this.swId) clearWatch(this.swId);
  }
}
