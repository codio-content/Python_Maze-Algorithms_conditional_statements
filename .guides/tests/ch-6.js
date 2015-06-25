
collisionEvent = null;
var _count = 0;
var _last = '';
var _true = true;

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

    collisionEvent = module.tp$getattr('collisionEvent');
    
    // test

    if(typeof collisionEvent != 'undefined') {

      window.showMessage = function(val) {
        _count++;
        _true = _true && (_last != val);
        _last = val;
      }

      Sk.misceval.callsim(collisionEvent, new Sk.builtin.str('wall'));
      Sk.misceval.callsim(collisionEvent, new Sk.builtin.str('monster'));
      Sk.misceval.callsim(collisionEvent, new Sk.builtin.str('energy'));
      Sk.misceval.callsim(collisionEvent, new Sk.builtin.str('goal'));

      if(_count != 4 || !_true) {
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
