# Logitech-Led

NodeJS bindings for Logitech's [Illumination SDK](https://www.logitechg.com/en-us/innovation/developer-lab.html)

## Installation

```bash
npm i logitech-led
```

## Example Usage

```js
const logitechLED = require('logitech-led');

const success = logitechLED.LogiLedInit();
if (success) {
    logitechLED.LogiLedSetLighting(0, 100, 0);
}
```

## API

### LogiLedInit()

* Must be called before everything else

### LogiLedSaveCurrentLighting()

### LogiLedRestoreCurrentLighting()

### LogiLedSetLighting(red, green, blue)

* *red*, *green*, *blue*: **integers** within the range [0,100]
