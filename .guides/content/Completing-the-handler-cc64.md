Now it's your turn to make sure that the player moves properly when all the arrow keys are pressed.

|||challenge
Complete the keyboard event handler by making sure all 4 arrow keys are properly handled. 

Use copy and paste rather than typing out the new code from scratch.

Below is the table of keycodes you can refer to.

{check it!! | custom}(ch-1)

|||

| Key | keyCode |
|-|:-:|
| Up Arrow | UP |
| Down Arrow | DOWN |
| Left Arrow | LEFT |
| Right Arrow | RIGHT |

|||guidance
## Solution

```javascript
function keyPressedEvent(keyCode) {

  if ( keyCode == 'LEFT' ) {
    player.moveLeft()
  } 
  if ( keyCode == 'RIGHT' ) {
    player.moveRight()
  } 
  if ( keyCode == 'UP' ) {
    player.moveUp()
  } 
  if ( keyCode == 'DOWN' ) {
    player.moveDown()
  }
  
}
```

|||