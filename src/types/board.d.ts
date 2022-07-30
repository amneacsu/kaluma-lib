import { SPI } from 'spi';

declare global {
  const board: {
    spi: (pin: Pin) => SPI;
  };
}

export {}
