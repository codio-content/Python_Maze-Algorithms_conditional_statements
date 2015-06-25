|||challenge
Here is some more broken code that is a bit harder to fix.

Make sure that your player moves in all directions. Just getting rid of the syntax errors is not enough!

{check It!! | custom}(ch-3)
|||


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
