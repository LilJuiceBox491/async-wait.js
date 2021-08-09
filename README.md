# async-wait.js

An NPM module to easily delay your code.

## Installation
```shell
# Using NPM
npm install async-wait.js 

# Using Yarn
yarn add async-wait.js
```

## Requiring Module
```js
// Using Node.js
const { config, wait } = require("async-wait.js");

// Using React.js
import { config, wait } from "async-wait.js";
```

## Usage
```js
const { config, wait } = require("async-wait.js"); // Import the module

(async() => {
  config(); // Configure the module

  console.log("Hello"); // Print "Hello" to the console
  wait(1000); // Wait 1000ms (1s)
  console.log("world"); // Print "world" to the console
})();
```

## Contact
**Contact *LilJuiceBox491* on Discord at *LilJuiceBox491#3256***