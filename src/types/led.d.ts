declare module 'led' {
  class LED {
    constructor(pin: Pin);

    on(): void;

    off(): void;

    toggle(): void;

    read(): State;

    pin: Pin;
  }
}
