|||challenge
In this challenge, we have provided you with an event handler `collisionEvent()`. It will get called whenever a collision is detected.

Your job is to use `if` and `else if` statements to write a message to the message bar saying what collision took place.

Notice the parameter `type` being passed to the handler. This contains a string value, depending on what you just hit. You can see below the possible string values that `type` can contain.

You can treat this as if it were a variable.

**Hint:** when testing a string condition, you will use 

```javascript
if (type == 'wall') {
  showMessage('You hit a wall')
}
```

Here are the possible values that `type` can have.

| Types |
| :- |
| wall |
| monster |
| energy |
| goal |

{check it!! | custom}(ch-5)
|||


|||guidance
## Solution
```javascript
function collisionEvent(type) {

  if ( type == 'wall') {
    showMessage('You hit a wall')
  }
  else if ( type == 'monster') {
    showMessage('You hit a monster')
  }
  else if ( type == 'energy') {
    showMessage('You hit some energy')
  }
  else if ( type == 'goal') {
    showMessage('You reached the exit')
  }

}
```
|||