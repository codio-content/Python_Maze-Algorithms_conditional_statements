|||challenge
##  Less and Greater
Inside the `turnTaken()` event handler, write some code that checks the `energy` variable as follows

- "if energy is less than 10, show the message "Low Energy".
- "if energy is greater than or equal to 30 show the message "Lots of energy".
- Otherwise show "Energy OK".

You need to test it out in the game first and make sure you get all the messages.

{check it!! | custom}(ch-8)
|||


|||guidance
## Solution

```javascript
function turnTaken() {
  
  if (energy < 10) {
    showMessage('Low energy')
  }
  else if (energy >= 30) {
    showMessage('Lots of energy')    
  }
  else {
    showMessage('Energy OK')
  }

}
```
|||