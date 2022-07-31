declare global {
  function pinMode(pin: Pin | Pin[], mode: Mode): void;

  function digitalRead(pin: Pin): State;

  function digitalWrite(pin: Pin, value: State): void;

  function digitalToggle(pin: Pin): void;

  function setWatch(
    callback: (pin: Pin) => void,
    pin: Pin,
    events?: EventType,
    debounce?: number,
  ): ListenerId;

  function clearWatch(id: ListenerId): void;

  function pulseRead(
    pin: Pin,
    count: number,
    options: {
      timeout?: number;
      startState?: number;
      mode: Mode;
      trigger: {
        pin?: Pin;
        startState?: State;
        interval: number[];
      };
    },
  ): number[] | null;

  function pulseWrite(pin: Pin, startState: State, interval: number[]): number;
}

export {}
