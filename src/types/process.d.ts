import { Stream } from 'stream';

declare global {
  const process: {
    arch: string;
    platform: string;
    version: string;
    builtin_modules: string[];
    getBuiltinModule: unknown;
    binding: unknown;
    memoryUsage(): {
      heapTotal: number;
      heapUsed: number;
      heapPeak: number;
    };
    stdin: Stream;
    stdout: Stream;
  };
}

export {}
