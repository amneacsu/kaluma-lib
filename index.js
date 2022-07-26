import { RotaryEncoder } from './RotaryEncoder';

const clkPin = 16;
const dtPin = 17;
const swPin = 18;

pinMode(clkPin, INPUT);
pinMode(dtPin, INPUT);
pinMode(swPin, INPUT_PULLUP);

const encoder = new RotaryEncoder(clkPin, dtPin, swPin);

encoder.on('rotate', (value) => {
  console.log('delta:', value);
});

encoder.on('click', () => {
  console.log('click');
});
