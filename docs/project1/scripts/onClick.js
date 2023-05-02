const signName = document.querySelector('#sign-name')
const signPassword = document.querySelector('#sign-password')

function next () {
    signPassword.classList.remove('none')
    signName.classList.add('none')
}

function goToPage (page) {
    window.location.href=page 
}

function openMedicalAnotation (event, id, patientId, userId) {
    if (!event.target.classList.contains('see-more') && !event.target.classList.contains('points-menu') && !event.target.closest('.options-points-menu')) { 
        window.location.assign(`./medicalAnotation.html?id=${id}&patient_id=${patientId}&user_id=${userId}`);
    }
}