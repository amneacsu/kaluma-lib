import { ADC } from 'adc';
import { GPIO } from 'gpio';
import { I2C } from 'i2c';
import { LED } from 'led';
import { SPI } from 'spi';
import { Button } from 'button';
import { PWM } from 'pwm';

declare global {
  const board: {
    name: string;

    LED: Pin;

    gpio(pin: Pin, mode?: Mode): GPIO;

    led(pin: Pin): LED;

    button(pin: Pin, options?: ButtonOptions): Button;

    pwm(pin: Pin, frequency?: number, duty?: number): PWM;

    adc(pin: Pin): ADC;

    i2c(bus: I2CBus, options: I2COptions): I2C;

    spi(bus: SPIBus, options: SPIOptions): SPI;
  };
}

export {}
