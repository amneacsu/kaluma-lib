declare global {
  const console: {
    log(...data: any[]): void;

    error(...data: any[]): void;
  }
}

export {};
