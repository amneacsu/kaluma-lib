declare global {
  type TimerID = number;

  function delay(msec: number): void;

  function millis(): number;

  function delayMicroseconds(usec: number): void;

  function micros(): number;

  function setTimeout(callback: () => unknown, timeout: number): TimerID;

  function setInterval(callback: () => unknown, interval: number): TimerID;

  function clearTimeout(id: TimerID): void;

  function clearInterval(id: TimerID): void;
}

export {}
