let stopButton = document.getElementById('stopButton');
let slowButton = document.getElementById('slowButton');
let goButton = document.getElementById('goButton');
let circles = document.getElementById('traffic-light').children;

stopButton.addEventListener('click', function() {
  circles[0].style.backgroundColor = 'red';
  circles[1].style.backgroundColor = '';
  circles[2].style.backgroundColor = '';
});

slowButton.addEventListener('click', function() {
  circles[0].style.backgroundColor = '';
  circles[1].style.backgroundColor = 'yellow';
  circles[2].style.backgroundColor = '';
});

goButton.addEventListener('click', function() {
  circles[0].style.backgroundColor = '';
  circles[1].style.backgroundColor = '';
  circles[2].style.backgroundColor = 'green';
});