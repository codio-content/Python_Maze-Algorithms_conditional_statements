
message = ''

def showMessage(val):
  global message
  message = val

try:
  execfile('/home/codio/workspace/public/py/ch-6.py')
  
  collisionEvent('wall')
  if not 'wall' in message.lower():
    raise ValueError("collisionEvent is not handling the 'wall' type correctly")
  
  collisionEvent('monster')
  if not 'monster' in message.lower():
    raise ValueError("collisionEvent is not handling the 'monster' type correctly")
  
  collisionEvent('energy')
  if not 'energy' in message.lower():
    raise ValueError("collisionEvent is not handling the 'energy' type correctly")
  
  collisionEvent('goal')
  if not ('goal' in message.lower() or 'exit' in message.lower()):
    raise ValueError("collisionEvent is not handling the 'goal' type correctly")
      
  print 'well done'
  exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
