declare global {
  function analogRead(pin: Pin): number;

  function analogWrite(pin: Pin, duty?: number, frequency?: number): void;

  function tone(
    pin: Pin,
    frequency?: number,
    options?: {
      duration?: number;
      duty?: number;
      inversion?: Pin;
    },
  ): void;

  function noTone(pin: Pin): void;
}

export {}
