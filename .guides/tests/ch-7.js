
turnTaken  = null;

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

    turnTaken = module.tp$getattr('turnTaken');
    
    // test
    // 
    var _if = false;
    var _else = false;

    if(typeof turnTaken != 'undefined') {

      window.showMessage = function(val) {
        if(val.toLowerCase() == 'low energy') _if = true;
      }

      energy = 9;
      Sk.misceval.callsim(turnTaken);

      window.showMessage = function(val) {
        if(val.toLowerCase() == 'energy ok') _else = true;
      }

      energy = 10;
      Sk.misceval.callsim(turnTaken);

      if(!_if || !_else ) {
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
