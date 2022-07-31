type I2CBus = number;

declare enum I2CMode {
  Master,
  Slave,
}

type I2COptions = {
  mode?: I2CMode;
  baudrate: number;
  scl: Pin;
  sda: Pin;
};

declare module 'i2c' {
  class I2C {
    constructor(bus: I2CBus, options: I2COptions);

    write: any;

    read: any;

    memWrite: any;

    memRead: any;

    close(): void;
  }
}
