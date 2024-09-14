declare global {
  type Pin = number;
  type WatcherId = number;

  enum Mode {
    Input = 0,
    Output = 1,
    InputPullUp = 2,
    InputPullDown = 3,
  }
  const INPUT = Mode.Input;
  const OUTPUT = Mode.Output;
  const INPUT_PULLUP = Mode.InputPullUp;
  const INPUT_PULLDOWN = Mode.InputPullDown;

  enum State {
    Low = 0,
    High = 1,
  }
  const LOW = State.Low;
  const HIGH = State.High;

  enum EventType {
    LowLevel = 1,
    HighLevel = 2,
    Falling = 4,
    Rising = 8,
    Change = 12,
  }
  const LOW_LEVEL = EventType.LowLevel;
  const HIGH_LEVEL = EventType.HighLevel;
  const FALLING = EventType.Falling;
  const RISING = EventType.Rising;
  const CHANGE = EventType.Change;
}

export {}
