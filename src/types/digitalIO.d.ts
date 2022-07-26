declare global {
  function pinMode(pin: Pin | Pin[], mode: Mode): void;
  function digitalToggle(pin: Pin): void;
  function digitalRead(pin: Pin): State;
  function digitalWrite(pin: Pin, value: State): void;
  function setWatch(
    callback: () => void,
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

  // pulseWrite
}

export {}
