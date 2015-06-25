
keyPressedEvent  = null;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  createRandomMaze();
    
  var _left = false;
  var _right = false;
  var _up = false;
  var _down = false;
    
  if(typeof keyPressedEvent  == 'function') {
  
    player.moveLeft = function () {
      _left = true;
    }

    keyPressedEvent('LEFT');

    player.moveRight = function () {
      _right = true;
    }

    keyPressedEvent('RIGHT');

    player.moveUp = function () {
      _up = true;
    }

    keyPressedEvent('UP');

    player.moveDown = function () {
      _down = true;
    }

    keyPressedEvent('DOWN');
    
    if(!_left || !_right || !_up || !_down) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }   
  }
  else {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  }
  
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');    

})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});