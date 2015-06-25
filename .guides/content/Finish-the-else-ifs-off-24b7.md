|||challenge
Your job is to complete the code on the left by inserting the missing `else if` statements and code to handle the up, down and right arrow keys.

If none of the arrow keys were pressed, then show a message.

{check it!! | custom}(ch-4)

|||

|||guidance
## Solution

```javascript
function keyPressedEvent(keyCode) {

  if ( keyCode == 'LEFT')  {
    player.moveLeft()
  } 
  else if ( keyCode == 'RIGHT' ) {
    player.moveRight()
  } 
  else if ( keyCode == 'UP' ) {
    player.moveUp()
  } 
  else if ( keyCode == 'DOWN' ) {
    player.moveDown() 
  }   
  else {
    showMessage('None of the arrow keys were pressed')
  }

}
```