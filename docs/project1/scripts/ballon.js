const balloon = document.querySelector('.balloon')
const arrowDown = document.querySelector('#arrow-down')
const balloonWrapper = document.querySelector('#balloon-wrapper')

arrowDown.addEventListener('click', function() {
    balloonWrapper.classList.toggle('none');
});

document.addEventListener('click', function(event) {
    if (!balloon.contains(event.target) && event.target !== arrowDown) {
        balloonWrapper.classList.add('none');
    }
});


