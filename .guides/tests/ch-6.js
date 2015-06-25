
collisionEvent = null;
var _count = 0;
var _last = '';
var _true = true;

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
      
  if(typeof collisionEvent  == 'function') {
  
    window.showMessage = function(val) {
      _count++;
      _true = _true && (_last != val);
      _last = val;
    }

    collisionEvent('wall');
    collisionEvent('monster');
    collisionEvent('energy');
    collisionEvent('goal');
    
    if(_count != 4 || !_true) {
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