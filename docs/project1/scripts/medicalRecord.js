const filterMenu = document.querySelector('#filter-menu')
const sessionsBox = document.querySelectorAll('.session-box')
const factRelevantBox = document.querySelectorAll('.fact-relevant-box')
const optionsMenuLine = document.querySelector('#options-menu-line')
const filterRule = document.querySelector('#filter-rule')
filterRule.textContent = optionsMenuLine.querySelector('.selected').textContent
const medicalRecords = document.querySelectorAll('.medical-record');

medicalRecords.forEach(medicalRecord => {
    const pointsMenu = medicalRecord.querySelector('.points-menu');
    const optionsPointsMenu = medicalRecord.querySelector('.options-points-menu');
    pointsMenu.addEventListener('click', event => {
        optionsPointsMenu.classList.remove('none');
        document.addEventListener('click', function(event) {
            if (!pointsMenu.contains(event.target) && event.target !== optionsPointsMenu) {
                optionsPointsMenu.classList.add('none')
            }
        });
    });
});

document.addEventListener('click', function(event) {
    if (!filterMenu.contains(event.target) && event.target !== optionsMenuLine) {
        optionsMenuLine.classList.add('none')
    }
});

// Filtrar por sessões e fatos relevantes.
filterMenu.addEventListener('click', function() {
    optionsMenuLine.classList.toggle('none')
    optionsMenuLine.addEventListener('click', function(event) {
        if (!event.target.classList.contains('selected')) {
            optionsMenuLine.querySelector('.selected').classList.remove('selected')
            event.target.classList.add('selected')
            filterRule.textContent = event.target.textContent
            if (filterRule.textContent === 'Sessão') {
                factRelevantBox.forEach(box => box.classList.add('none'));
                sessionsBox.forEach(box => box.classList.remove('none'));
            } else if (filterRule.textContent === 'Fato Relevante' ) {
                sessionsBox.forEach(box => box.classList.add('none'));
                factRelevantBox.forEach(box => box.classList.remove('none'));
            } else {
                sessionsBox.forEach(box => box.classList.remove('none'));
                factRelevantBox.forEach(box => box.classList.remove('none'));
            }
        }
    })
});