const addon = require('../build/Release/logitech-led-native');

interface LogitechLed {
    LogiLedInit: () => boolean;
    LogiLedSaveCurrentLighting: () => boolean;
    LogiLedRestoreCurrentLighting: () => boolean;
    LogiLedSetLighting: (red: number, green: number, blue: number) => boolean;
}

export = addon as LogitechLed

