
{Check It!|assessment}(test-2229360693)

|||guidance
## Solution

There are two things wrong with this code.

Firstly, there is a `:` missing after `LEFT`

Secondly, we have `=` instead of `==`

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
