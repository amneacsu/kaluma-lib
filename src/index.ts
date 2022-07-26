var led = 25;

pinMode(led, OUTPUT);
setInterval(function () {
  console.log('Toggle...');
  digitalToggle(led);
}, 1000);
