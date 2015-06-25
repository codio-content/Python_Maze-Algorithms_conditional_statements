|||challenge
Your job is to complete the code on the left by inserting the missing `else if` statements and code to handle the up, down and right arrow keys.

If none of the arrow keys were pressed, then show a message.

{check it!! | custom}(ch-4)

|||

|||guidance
## Solution

```python
def keyPressedEvent(keyCode):
  if keyCode == 'LEFT':
    moveLeft()
  elif keyCode == 'RIGHT':
    moveRight()
  elif keyCode == 'UP':
    moveUp()
  elif keyCode == 'DOWN':
    moveDown()
  else:
    showMessage('None of the arrow keys were pressed')
```