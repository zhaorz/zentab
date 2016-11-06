/* zentab.js */

function padLeft(n) {
  var s = n.toString();
  while (s.length < 2) {
    s = '0' + s;
  }
  return s;
}

function updateClock () {
  var clock = document.getElementById('clock');
  var d = new Date();
  var time = [d.getHours(), d.getMinutes(), d.getSeconds()]
    .map(padLeft)
    .join(':');
  clock.innerHTML = time;
}

function setSalutation (name) {
  var e = document.getElementById('salutation');
  var d = new Date();
  var hour = d.getHours();
  var greeting;

  if (23 <= hour || hour < 4) {
    greeting = 'Go to sleep';
  } else if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else if (hour < 23) {
    greeting = 'Good evening';
  }

  e.innerHTML = [greeting, ', ', name, '.'].join('');
}


document.addEventListener('DOMContentLoaded', function () {
  updateClock();
  window.setInterval(updateClock, 1000);
  setSalutation('Richard');
});
