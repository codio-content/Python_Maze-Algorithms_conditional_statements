
keyPressedEvent  = null;

var fileName = window.location.origin + '/public/py/' + window.testEnv.cmd + '.py';

$.get(fileName)
.success(function(data) {

  if(data == 404) {
    console.log(exception);
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, fileName + ' not found'); 
  }

  try {        
    createEmptyMaze();
    
    // load python
    var module = Sk.importMainWithBody("", false, data);

    // get reference to functions

    keyPressedEvent = module.tp$getattr('keyPressedEvent');
    
    // test

    createRandomMaze();

    var _left = false;
    var _right = false;
    var _up = false;
    var _down = false;
    var _else = false;

    if(typeof keyPressedEvent != 'undefined') {

      window.showMessage = function (val) {
        _else = true;
      }        


      player.moveLeft = function () {
        _left = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('LEFT'));

      if(!_left || _else) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }   


      player.moveRight = function () {
        _right = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('RIGHT'));

      if(!_right || _else) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }   


      player.moveUp = function () {
        _up = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('UP'));

      if(!_up || _else) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }   


      player.moveDown = function () {
        _down = true;
      }

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('DOWN'));

      if(!_down || _else) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }   

      _left = false;
      _right = false;
      _up = false;
      _down = false;    

      Sk.misceval.callsim(keyPressedEvent, new Sk.builtin.str('C'));

      if(_left || _right || _up || _down || !_else) {
        return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
      }   
    }
    else {
      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
    }

    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');    
    
  }
  catch(exception) {
    console.log('skulpt exception');
    console.log(exception);
    codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.toString()); 
  }
})
.fail(function(jqxhr, settings, exception) {
  console.log('jqxhr fail');
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});    
