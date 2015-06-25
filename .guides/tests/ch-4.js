
keyPressedEvent  = null;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  createRandomMaze();
    
  var _left = false;
  var _right = false;
  var _up = false;
  var _down = false;
  var _else = false;
    
  if(typeof keyPressedEvent  == 'function') {

    window.showMessage = function (val) {
      _else = true;
    }        
    
    
    player.moveLeft = function () {
      _left = true;
    }

    keyPressedEvent('LEFT');
    
    if(!_left || _else) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }   
    

    player.moveRight = function () {
      _right = true;
    }

    keyPressedEvent('RIGHT');
    
    if(!_right || _else) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }   
    

    player.moveUp = function () {
      _up = true;
    }

    keyPressedEvent('UP');

    if(!_up || _else) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }   
    
    
    player.moveDown = function () {
      _down = true;
    }

    keyPressedEvent('DOWN');

    if(!_down || _else) {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }   
    
    _left = false;
    _right = false;
    _up = false;
    _down = false;    

    keyPressedEvent('C');
    
    if(_left || _right || _up || _down || !_else) {
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