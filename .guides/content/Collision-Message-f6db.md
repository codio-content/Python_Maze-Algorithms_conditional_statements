
{Check It!|assessment}(test-855045964)

|||guidance
## Solution
```python
def collisionEvent(type):
  if type == 'wall':
    showMessage('You hit a wall')
  elif type == 'monster':
    showMessage('You hit a monster')
  elif type == 'energy':
    showMessage('You hit some energy')
  elif type == 'goal':
    showMessage('You reached the exit')
```
|||
