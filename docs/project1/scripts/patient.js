filter.addEventListener('submit', event => {
    event.preventDefault()
    filterPatients(filter.querySelector('#input-search').value)
})