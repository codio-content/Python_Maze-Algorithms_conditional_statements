Now it's your turn to make sure that the player moves properly when all the arrow keys are pressed.

{Check It!|assessment}(test-987418362)

| Key | keyCode | Action
|-|-|-|
| Up Arrow | UP | moveUp() |
| Down Arrow | DOWN | moveDown() |
| Left Arrow | LEFT | moveLeft() |
| Right Arrow | RIGHT | moveRight() |

|||guidance
## Solution

```python
def keyPressedEvent(keyCode):
  if keyCode == 'LEFT':
    moveLeft()
  if keyCode == 'RIGHT':
    moveRight()
  if keyCode == 'UP':
    moveUp()
  if keyCode == 'DOWN':
    moveDown()
```

|||
