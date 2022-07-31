type SPIBus = number;

declare enum SPIMode {
  Mode0,
  Mode1,
  Mode2,
  Mode3,
}

declare enum SPIBitOrder {
  MostSignificantByte,
  LeastSignificantByte,
}

type SPIOptions = {
  mode?: SPIMode;
  baudrate?: number;
  bitorder?: SPIBitOrder;
  sck: Pin;
  mosi: Pin;
  miso: Pin;
};

declare module 'spi' {
  class SPI {
    constructor(bus: SPIBus, options?: SPIOptions);

    transfer(data: Uint8Array | string, timeout?: number): Uint8Array | null;

    send(data: Uint8Array | string, timeout?: number, count?: number): number;

    recv(length: number, timeout?: number): Uint8Array | null;

    close(): void;
  }
}
