console.log('start...');

import { MAX7219 } from './lib/max7219';

const din = 19;
const clk = 18;
// const cs = 16;
const cs = 17;

const max = new MAX7219(0, cs, 4);
max.setup();
max.clear();
max.setIntensity(0);

const rand = (n: number) => ~~(Math.random() * n);


for (let i = 0; i < 16; i += 1) {
  const start = millis();
  const d = new Uint8Array(256);
  const data = d.map((n) => rand(256));
  max.write(data);
  const end = millis();
  console.log('Took', end - start);
}

console.log('done!');
