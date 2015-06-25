
keyPressedEvent  = null;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
  
  var _if = false;
  var _else = false;
  
  if(typeof turnTaken == 'function') {
  
    window.showMessage = function(val) {
      if(val.toLowerCase() == 'low energy') _if = true;
    }
    
    energy = 9;
    turnTaken();
    
    window.showMessage = function(val) {
      if(val.toLowerCase() == 'energy ok') _else = true;
    }
    
    energy = 10;
    turnTaken();
    

    if(!_if || !_else ) {
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