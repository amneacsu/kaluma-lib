const led = 25;
pinMode(led, OUTPUT);

setInterval(() => {
  console.log('Toggle...');
  digitalToggle(led);
}, 1000);
