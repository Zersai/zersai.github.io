document.getElementById('status').innerHTML = navigator.onLine ? 'online' : 'offline';

var target = document.getElementById('target');

function handleStateChange() {
  var timeBadge = new Date().toTimeString().split(' ')[0];
  var newState = document.createElement('p');
  var state = navigator.onLine ? 'online' : 'offline';
  newState.innerHTML = '' + timeBadge + ' Connection state changed to ' + state + '.';
  target.appendChild(newState);
}

window.addEventListener('online', handleStateChange);
window.addEventListener('offline', handleStateChange);

document.getElementById('result').innerHTML = navigator.deviceMemory || 'unknown'

function vibrateSimple() {
  navigator.vibrate(200);
}

function vibratePattern() {
  navigator.vibrate([100, 200, 200, 200, 500]);
}
