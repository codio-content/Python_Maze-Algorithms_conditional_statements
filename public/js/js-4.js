
function keyPressedEvent(keyCode) {

  if ( keyCode == 'LEFT')  {
    player.moveLeft()
  } 
  else if ( keyCode == 'RIGHT' ) {
    player.moveRight()
  } 
  else {
    showMessage('Left or Right was NOT pressed')
  }

}

