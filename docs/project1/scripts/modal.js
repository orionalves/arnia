const modal = document.querySelector('#modal')
const userRegister = document.querySelector('#success-register')
const createRegister = document.querySelector('#success-create')
const editRegister = document.querySelector('#success-edit')
const deleteRegister = document.querySelector('#success-delete')
const newPatient = document.querySelector('#new-patient')
const editPatients = document.querySelector('#edit-patient')
const showPatient = document.querySelector('#show-patient')
const newSession = document.querySelector('#new-session')
const relevantFact = document.querySelector('#relevant-fact')
const editSession = document.querySelector('#edit-session')
const editFact = document.querySelector('#edit-fact')

// Abre o modal
function openModal(element, id) {
    getPatient (id)
    // Remove a classe none
    modal.classList.remove('none')
    element.classList.remove('none')
}

function openForm(form, id = '') {
    modal.classList.remove('none')
    form (id)
}

function showPatientForms(id) {
    patientData (id)
    modal.classList.remove('none')
    showPatient.classList.remove('none')
}
// function showPatientForms(id) {
//     getPatient (id)
//     modal.classList.remove('none')
//     showPatient.classList.remove('none')
// }

function editPatientForms(id) {
    editPatient (id)
    modal.classList.remove('none')
    editPatients.classList.remove('none')
}

// Fecha o modal
function closeModal() {
    // Atualiza a página
    location.reload()
}

function success (element, success ) {
    element.classList.add('none')
    success.classList.remove('none')
}