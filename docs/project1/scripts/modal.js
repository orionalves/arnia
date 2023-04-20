const modal = document.querySelector('#modal')
const userRegister = document.querySelector('#success-register')
const createRegister = document.querySelector('#success-create')
const editRegister = document.querySelector('#success-edit')
const deleteRegister = document.querySelector('#success-delete')
const newPatient = document.querySelector('#new-patient')
const editPatient = document.querySelector('#edit-patient')
const showPatient = document.querySelector('#show-patient')
const newSession = document.querySelector('#new-session')
const relevantFact = document.querySelector('#relevant-fact')

// Abre o modal
function openModal(element) {
    // Remove a classe none
    modal.classList.remove('none')
    element.classList.remove('none')
}

// Fecha o modal
function closeModal() {
    // Atualiza a página
    location.reload()
}

// atualizar a página quando clicar no modal
document.addEventListener('click', function(e) {
    if (e.target === modal && !e.target.hasAttribute('dont-close')) {
        closeModal()
    }
});

function success (element, success ) {
    element.classList.add('none')
    success.classList.remove('none')
}