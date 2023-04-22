const arrowHeadUp = document.createElement('img')
const backToTop = document.createElement('div')
arrowHeadUp.src = '../images/icons/arrowhead-up.png'
arrowHeadUp.alt = 'arrowhead up'
backToTop.id = 'backToTop'
backToTop.className = 'montserrat-16'
backToTop.textContent = 'Voltar para o topo'
backToTop.insertBefore(arrowHeadUp, backToTop.firstChild)
    
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight    
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100
    document.body.appendChild(backToTop);
    scrollPercent > 50 ? backToTop.style.display = 'flex' : backToTop.style.display = 'none'
})

window.addEventListener('click', (event) => {
    const backToTopElement = document.querySelector('#backToTop')
    if (event.target === backToTopElement) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
})



