
direction = ''

def moveLeft():
  global direction
  direction = 'LEFT'

def moveRight():
  global direction
  direction = 'RIGHT'

def moveUp():
  global direction
  direction = 'UP'

def moveDown():
  global direction
  direction = 'DOWN'

try:
  execfile('/home/codio/workspace/public/py/ch-3.py')
  
  keyPressedEvent('LEFT')
  if direction != 'LEFT':
    raise ValueError('keyPressedEvent is not handling the LEFT keyCode correctly')
  
  keyPressedEvent('RIGHT')
  if direction != 'RIGHT':
    raise ValueError('keyPressedEvent is not handling the RIGHT keyCode correctly')
  
  keyPressedEvent('UP')
  if direction != 'UP':
    raise ValueError('keyPressedEvent is not handling the UP keyCode correctly')
  
  keyPressedEvent('DOWN')
  if direction != 'DOWN':
    raise ValueError('keyPressedEvent is not handling the DOWN keyCode correctly')
      
  print 'well done'
  exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
