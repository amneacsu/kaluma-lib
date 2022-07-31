type ButtonOptions = {
  mode?: Mode;
  event?: EventType.Falling | EventType.Rising | EventType.Change;
  debounce?: number;
};

declare module 'button' {
  class Button {
    constructor(pin: Pin, options?: ButtonOptions);
  }
}
