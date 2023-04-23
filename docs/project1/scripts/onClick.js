const signName = document.querySelector('#sign-name')
const signPassword = document.querySelector('#sign-password')

function next () {
    signPassword.classList.remove('none')
    signName.classList.add('none')
}

function goToPage (page) {
    window.location.href=page 
}

function openMedicalAnotation (event) {
    if (!event.target.classList.contains('see-more') && !event.target.classList.contains('points-menu') && !event.target.closest('.options-points-menu')) { 
        goToPage('./medicalAnotation.html')
    }
}

// const expand = (questionId) => {
//     const question = document.getElementById(questionId)
//     const expand = question.querySelector('.expanded')
//     expand.classList.contains('none') ? expand.classList.remove('none') : expand.classList.add('none')
// }