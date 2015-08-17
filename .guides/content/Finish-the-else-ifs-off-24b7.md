
{Check It!|assessment}(test-1602620350)

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
|||
