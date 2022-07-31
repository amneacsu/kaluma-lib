declare module 'events' {
  type Listener = (...args: any[]) => void;

  class EventEmitter {
    addListener(eventName: string, listener: Listener): void;

    emit(eventName: string, ...args: any[]): void;

    on(eventName: string, callback: Listener): void;

    once(eventName: string, listener: Listener): void;

    removeListener(eventName: string, listener: Listener): void;

    removeAllListener(eventName?: string): void;

    off(eventName: string, listener: Listener): void;

    listeners(eventName: string): Listener[];

    listenerCount(eventName: string): number;
  }
}
