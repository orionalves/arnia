const signName = document.querySelector('#sign-name')
const signPassword = document.querySelector('#sign-password')
const balloonWrapper = document.querySelector('#balloon-wrapper')
const balloon = document.querySelector('.balloon')
const arrowDown = document.querySelector('#arrow-down')

function next () {
    signPassword.classList.remove('none')
    signName.classList.add('none')
}

function goToPage (page) {
    window.location.href=page 
}

arrowDown.addEventListener('click', function() {
    balloonWrapper.classList.toggle('none');
});
  
document.addEventListener('click', function(e) {
    if (!balloon.contains(e.target) && e.target !== arrowDown) {
        balloonWrapper.classList.add('none');
    }
});  
  
  