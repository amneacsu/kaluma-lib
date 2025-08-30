import { LCD } from '../lib/lcd';

const lcd = new LCD(0, 1, [2, 3, 4, 5]);
lcd.begin();
lcd.clear();
lcd.print('FARTS');
