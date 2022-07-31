console.log('start...');

import { PWM } from 'pwm';

const p = new PWM(150, 1000, .9);
p.start();

for (let i = 0; i < 3000; i += 1) {
  p.setFrequency(i * 1);
  delay(1);
}

p.stop();
p.close();
