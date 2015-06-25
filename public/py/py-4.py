
def keyPressedEvent(keyCode):
  if keyCode == 'LEFT':
    moveLeft()
  elif keyCode == 'RIGHT':
    moveRight()
  else:
    showMessage('Left or Right was NOT pressed')
