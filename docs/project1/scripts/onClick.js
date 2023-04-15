const signName = document.querySelector('#sign-name')
const signPassword = document.querySelector('#sign-password')


function next () {
    signPassword.classList.remove('none')
    signName.classList.add('none')
}

function goToPage (page) {
    window.location.href=page 
}