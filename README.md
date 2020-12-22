# Logitech-Led

NodeJS bindings for Logitech's [Illumination SDK](https://www.logitechg.com/en-us/innovation/developer-lab.html)

## Example Usage

```js
const logitechLED = require('logitech-led');

const success = logitechLED.LogiLedInit();
if (success) {
    logitechLED.LogiLedSetLighting(0, 100, 0);
}
```

interface LogitechLed {
    LogiLedInit: () => boolean;
    LogiLedSaveCurrentLighting: () => boolean;
    LogiLedRestoreCurrentLighting: () => boolean;
    LogiLedSetLighting: (red: number, green: number, blue: number) => boolean;
}

## API

### LogiLedInit()

* Must be called before everything else

### LogiLedSaveCurrentLighting()

### LogiLedRestoreCurrentLighting()

### LogiLedSetLighting(red, green, blue)

* red, green, blue: **integers** within the range [0,100]
