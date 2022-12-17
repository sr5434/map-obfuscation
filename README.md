# MapObfuscation
[NPM Package](https://www.npmjs.com/package/map-obfuscation/)

This package obfuscates coordinates to improve user privacy. The code has some detailed comments if you want to learn more about the inner workings of this algorithm.
# Example Usage
```
var mapObfuscation = require("map-obfuscation");//Include MapObfuscation
console.log(mapObfuscation.wgs2sd(12.345, 67.890));//Print obfuscated coordinates in the console
```
## DeltaMultiplier
You can use the ```deltaMultiplier``` parameter to control the amount of obfuscation you want.
```
var mapObfuscation = require("map-obfuscation");//Include MapObfuscation
console.log(mapObfuscation.wgs2sd(12.345, 67.890, 0.5));//Print obfuscated coordinates in the console
```
