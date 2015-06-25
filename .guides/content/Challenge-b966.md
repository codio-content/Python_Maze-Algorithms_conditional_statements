
|||challenge
## Not Equal
Inside the `turnTaken()` event handler, write some code that checks if `energy` is less than `10`, then show the message 'Low energy' otherwise say 'Energy OK'.

Test it out in the game first and check you get the right message when the energy is 10 or more and also when less than 10.

{check it!! | custom}(ch-7)
|||

|||guidance
## Solution

```javascript
function turnTaken() {
  if (energy < 10) {
    showMessage('Low energy')
  }
  else {
    showMessage('Energy OK')    
  }
}
```
|||
