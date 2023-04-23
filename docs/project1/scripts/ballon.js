const balloon = document.querySelector('.balloon')
const arrowDown = document.querySelector('#arrow-down')
const balloonWrapper = document.querySelector('#balloon-wrapper')
const filterMenu = document.querySelector('#filter-menu')
const optionsMenuLine = document.querySelector('#options-menu-line')
const filterRule = document.querySelector('#filter-rule')
filterRule.textContent = optionsMenuLine.querySelector('.selected').textContent;

arrowDown.addEventListener('click', function() {
    balloonWrapper.classList.toggle('none');
});

document.addEventListener('click', function(event) {
    if (!balloon.contains(event.target) && event.target !== arrowDown) {
        balloonWrapper.classList.add('none');
    }
    if (!filterMenu.contains(event.target) && event.target !== optionsMenuLine) {
        optionsMenuLine.classList.add('none')
    }
});

filterMenu.addEventListener('click', function() {
    optionsMenuLine.classList.toggle('none');
    optionsMenuLine.addEventListener('click', function(event) {
        if (!event.target.classList.contains('selected')) {
            optionsMenuLine.querySelector('.selected').classList.remove('selected')
            event.target.classList.add('selected');
            filterRule.textContent = event.target.textContent
        }
    })
});
