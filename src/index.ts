// import { Switch } from './lib/Switch';
//
// const s = new Switch(15);
//
// setInterval(() => {
//   console.log('running...');
// }, 1000);
//
// s.onChange((newState) => {
//   console.log('changed:', newState);
// });

import { LED } from 'led';

const x = new LED(0);
x.on();
