const balloon = document.querySelector('.balloon')
const arrowDown = document.querySelector('#arrow-down')
const balloonWrapper = document.querySelector('#balloon-wrapper')
const userEmailBallon = document.querySelector('#user-email-ballon')
const userNameHeader = document.querySelector('#user-name-header')

arrowDown.addEventListener('click', function() {
    balloonWrapper.classList.toggle('none')
});

document.addEventListener('click', function(event) {
    if (!balloon.contains(event.target) && event.target !== arrowDown) {
        balloonWrapper.classList.add('none')
    }
});

const getUserLogged = async (id) => {
    const apiResponse = await fetch(`https://arnia-project1.onrender.com/users/${id}`);
    return await apiResponse.json()
}

const userLogged = async (id) => {
    const user = await getUserLogged(id)
    userNameHeader.textContent = user.name
    userEmailBallon.textContent = user.email
}

document.addEventListener('DOMContentLoaded', async () => {
    await userLogged (new URLSearchParams(window.location.search).get('user_id'))
})

