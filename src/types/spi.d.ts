declare module 'spi' {
  class SPI {
    transfer: unknown;
    send(
      data: Uint8Array | string,
      timeout?: number,
      count?: number,
    ): number;
    recv: unknown;
    close(): void;
  }
}
