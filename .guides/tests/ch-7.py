
energy = 0
message = ''

def showMessage(val):
  global message
  message = val

def getEnergy():
  global energy
  return energy
  
try:
  execfile('/home/codio/workspace/public/py/ch-7.py')
  
  turnTaken()
  if message.lower() != 'low energy':
    raise ValueError("turnTaken is not handling low energy scenarios")

  energy = 100
  turnTaken()
  if message.lower() != 'energy ok':
    raise ValueError("turnTaken is not handling low energy scenarios")
  
  print 'well done'
  exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
