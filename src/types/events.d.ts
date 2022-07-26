declare module 'events' {
  class EventEmitter {
    emit(name: string, ...args: any[]): void;
    on(name: string, callback: (...args: any[]) => void): void;
  }
}
