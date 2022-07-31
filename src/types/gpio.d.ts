declare module 'gpio' {
  class GPIO {
    constructor(pin: Pin, mode?: Mode);

    read(): State;

    write(state: State): void;

    toggle(): void;

    low(): void;

    high(): void;

    irq(
      callback: (
        pin: Pin,
        event: EventType.Falling | EventType.Rising | EventType.Change,
      ) => void,
      event: EventType.Falling | EventType.Rising | EventType.Change,
    ): void;

    pin: Pin;

    mode: Mode;
  }
}
