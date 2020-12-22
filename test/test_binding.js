const LogitechLed = require("../dist/binding.js");
const assert = require("assert");

assert(LogitechLed, "The expected function is undefined");
assert(LogitechLed.LogiLedInit, "The expected function is undefined");
assert(LogitechLed.LogiLedSaveCurrentLighting, "The expected function is undefined");
assert(LogitechLed.LogiLedSetLighting, "The expected function is undefined");