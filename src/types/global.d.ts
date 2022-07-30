declare global {
  function atob(encodedData: string): Uint8Array;
  function seed(seed: number): void;
}

export {}
