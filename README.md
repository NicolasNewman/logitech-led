# Logitech-Led

NodeJS bindings for Logitech's Illumination SDK

## API

## Example Usage

```js
const logitechLED = require('logitech-led');

const success = logitechLED.LogiLedInit();
if (success) {
    logitechLED.LogiLedSetLighting(0, 100, 0);
}
```
