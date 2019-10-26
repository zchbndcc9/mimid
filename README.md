<p align="center">
  <img src="assets/MimidLogo.jpg" alt="MimidLogo">
</p>

# Mimid
Functional event-emitter library for javascript. Each time you call a function on a current mimid, a new mimid is returned to the caller. This allows you to chain multiple emits and provides composability of event emitters.

# Installation
```shell
yarn add mimid
```
or
```shell
npm add mimid
```

# How-To

```javascript
import mimid fromm 'mimid'

const emitter = 
  mimid()
    .on("hello", () => console.log("hello there")
    .on("goodbye", (data) => console.log(`Goodbye ${data})
    
emitter
  .emit("hello")
  .emit("goodbye", "Jim")
```

## API

### `on(event, handler)`
Create a new event emitter with the given event and its associated handler
### `close(event)`
Creates a new event emitter without the event in its listeners
### `off()`
Creates a new event emitter without any listeners
### `emit(event, data)`
Emit an event to the subscribers to the current emitter and returns a new event emitter with the same listeners
### `listeners()`
Retrieves an array of listeners from the current event emitter
