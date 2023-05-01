const filterMenu = document.querySelector('#filter-menu')
const sessionsBox = document.querySelectorAll('.session-box')
const factRelevantBox = document.querySelectorAll('.fact-relevant-box')
const optionsMenuLine = document.querySelector('#options-menu-line')
const filterRule = document.querySelector('#filter-rule')
filterRule.textContent = optionsMenuLine.querySelector('.selected').textContent
const medicalRecords = document.querySelectorAll('.medical-record');
const medicalRecordBoxContainer = document.querySelector('#medical-record-box-container')

document.addEventListener('click', function(event) {
    if (!filterMenu.contains(event.target) && event.target !== optionsMenuLine) {
        optionsMenuLine.classList.add('none')
    }
});

// Filtrar por Sessões e Fatos relevantes.
filterMenu.addEventListener('click', function() {
    optionsMenuLine.classList.toggle('none')
    optionsMenuLine.addEventListener('click', function(event) {
        if (!event.target.classList.contains('selected')) {
            optionsMenuLine.querySelector('.selected').classList.remove('selected')
            event.target.classList.add('selected')
            filterRule.textContent = event.target.textContent
            if (filterRule.textContent === 'Sessão') {
                showMedicalRecordFilter (new URLSearchParams(window.location.search).get('id'), 'Sessão')
            } else if (filterRule.textContent === 'Fato Relevante' ) {
                showMedicalRecordFilter (new URLSearchParams(window.location.search).get('id'), 'Fato relevante')
            } else {
                showMedicalRecordFilterAll (new URLSearchParams(window.location.search).get('id'))
            }
        }
    })
});
