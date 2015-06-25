|||challenge
##  Less and Greater
Inside the `turnTaken()` event handler, write some code that checks the `getEnergy()` value as follows

- "if energy is less than 10, show the message "Low Energy".
- "if energy is greater than or equal to 30 show the message "Lots of energy".
- Otherwise show "Energy OK".

You need to test it out in the game first and make sure you get all the messages.

{check it!! | custom}(ch-8)
|||


|||guidance
## Solution

```python
def turnTaken():
  if getEnergy() < 10:
    showMessage('Low energy')
  elif getEnergy() >= 30:
    showMessage('Lots of energy')    
  else:
    showMessage('Energy OK') 
```
|||