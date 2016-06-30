
direction = ''

def moveLeft():
  global direction
  direction = 'LEFT'

try:
  execfile('/home/codio/workspace/public/py/ch-2.py')
  
  keyPressedEvent('LEFT')
  if direction != 'LEFT':
    raise ValueError('keyPressedEvent is not handling the LEFT keyCode correctly')
  
  print 'well done'
  exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
