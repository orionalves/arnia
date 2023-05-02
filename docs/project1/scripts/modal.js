const modal = document.querySelector('#modal')
const userRegister = document.querySelector('#success-register')
const createRegister = document.querySelector('#success-create')
const successRegister = document.querySelector('#success-register')
const deleteRegister = document.querySelector('#success-delete')
const newPatient = document.querySelector('#new-patient')
const editPatients = document.querySelector('#edit-patient')
const showPatient = document.querySelector('#show-patient')
const newSession = document.querySelector('#new-session')
const relevantFact = document.querySelector('#relevant-fact')
const editSession = document.querySelector('#edit-session')
const editFact = document.querySelector('#edit-fact')

function openModal(element) {
    modal.classList.remove('none')
    element.classList.remove('none')
}

function showPatientForms(id) {
    patientData (id)
    modal.classList.remove('none')
    showPatient.classList.remove('none')
}

function editPatientForms(id) {
    editPatient (id)
    modal.classList.remove('none')
    editPatients.classList.remove('none')
}

function closeModal() {
    modal.classList.add('none')
}

function success (element, success) {
    element.classList.add('none')
    success.classList.remove('none')
}