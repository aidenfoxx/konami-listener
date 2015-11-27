# Konami Listener
A simple Konami Code listener which executes a callback if the user enters the Konami Code.

## Usage
The script accepts a number of parameters:

```javascript
// The function to be executed if the code is entered
var callback = function() { alert('Hello World'); };

// The delay between the last key pressed and the user having to re-enter the code
var resetTimeout = 2000;

var listener = new KonamiListener(callback, resetTimeout);
```

## License
All code is free to use and distribute under MIT License unless otherwise specified.