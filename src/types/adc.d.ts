declare module 'adc' {
  class ADC {
    constructor(pin: Pin);

    read(): number;

    pin: Pin;
  }
}
