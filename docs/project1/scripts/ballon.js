const balloon = document.querySelector('.balloon')
const arrowDown = document.querySelector('#arrow-down')
const balloonWrapper = document.querySelector('#balloon-wrapper')

arrowDown.addEventListener('click', function() {
    balloonWrapper.classList.toggle('none');
    console.log('clicou')
});
  
document.addEventListener('click', function(e) {
    if (!balloon.contains(e.target) && e.target !== arrowDown) {
        balloonWrapper.classList.add('none');
    }
});  