const led = 25; // Onboard LED GPIO pin

pinMode(led, OUTPUT); // Set the LED pin as output

setInterval(() => {
  digitalWrite(led, digitalRead(led) ? 0 : 1); // Toggle LED state
}, 500); // Blink every 500ms

export {}

console.log('blink');
