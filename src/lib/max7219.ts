import { GraphicsContext } from 'graphics';
import { SPI } from 'spi';

const MAX7219_TEST = 0x0f;
const MAX7219_BRIGHTNESS = 0x0a;
const MAX7219_SCANLIMIT = 0x0b;
const MAX7219_DECODEMODE = 0x09;
const MAX7219_SHUTDOWN = 0x0c;

type Intensity = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
type ScanLimit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export class MAX7219 {
  cs: Pin;
  devices: Pin;
  context?: GraphicsContext;
  spi: SPI;

  constructor(bus: SPIBus, cs: Pin, devices?: number) {
    this.cs = cs;
    this.devices = devices ?? 1;
    this.spi = new SPI(0);
  }

  setup() {
    pinMode(this.cs, OUTPUT);
    digitalWrite(this.cs, HIGH);
    this.cmd(MAX7219_SHUTDOWN, 0x00);
    this.cmd(MAX7219_TEST, 0x00);
    this.cmd(MAX7219_SCANLIMIT, 0x07);
    this.cmd(MAX7219_DECODEMODE, 0x00);
    this.cmd(MAX7219_SHUTDOWN, 0x01);
  }

  cmd(op: number, data: number) {
    digitalWrite(this.cs, LOW);
    for (var d = 0; d < this.devices; d++) {
      this.spi.transfer(new Uint8Array([op, data]));
    }
    digitalWrite(this.cs, HIGH);
  }

  write(data: Uint8Array) {
    for (var r = 0; r < 8; r++) {
      digitalWrite(this.cs, LOW);
      for (var d = 0; d < this.devices; d++) {
        this.spi.transfer(new Uint8Array([r + 1, data[r * this.devices + d]]));
      }
      digitalWrite(this.cs, HIGH);
    }
  }

  clear() {
    var buf = new Uint8Array(this.devices * 8);
    buf.fill(0);
    this.write(buf);
  }

  on() {
    this.cmd(MAX7219_SHUTDOWN, HIGH);
  }

  off() {
    this.cmd(MAX7219_SHUTDOWN, LOW);
  }

  setScanLimit(limit: ScanLimit) {
    this.cmd(MAX7219_SCANLIMIT, limit);
  }

  setIntensity(intensity: Intensity) {
    this.cmd(MAX7219_BRIGHTNESS, intensity);
  }

  setTestMode(mode: boolean) {
    this.cmd(MAX7219_TEST, mode ? HIGH : LOW);
  }
}
