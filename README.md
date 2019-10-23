# gnome
Functional event-emitter library for javascript.


```javascript
import gnome fromm 'gnome'

const emitter = 
  gnome()
    .on("hello", () => console.log("hello there")
    .on("goodbye", (data) => console.log(`Goodbye ${data})
    
emitter
  .emit("hello")
  .emit("goodbye", "Jim")
```
