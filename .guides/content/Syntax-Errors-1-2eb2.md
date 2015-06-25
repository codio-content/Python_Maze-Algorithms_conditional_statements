|||challenge
In the code on the left, we have one `if` statement which has been badly written.

Your job is to fix the code so it runs properly without a syntax error.

If you've fixed it, you should be able to move the player to the left (other directions won't work).

{check It!! | custom}(ch-2)
|||

|||guidance
## Solution

```python
def keyPressedEvent(keyCode):
  if keyCode == 'LEFT':
    moveLeft()
```
