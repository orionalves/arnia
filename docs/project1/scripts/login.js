const login = document.querySelector('#login')
const password = document.querySelector('#password')
const passwordField = document.querySelector('#password-field')
const loginForm = document.querySelector('#login-form')

const getUserLogin = async (email, password) => {
    const apiResponse = await fetch(`http://localhost:3000/users/?email=${email}&password=${password}`)
    const users = await apiResponse.json()
    const user = users[0]

    if (users.length === 0) {
        const loginError = document.createElement("small")
        loginError.classList.add('montserrat-12', 'red', 'error')
        loginError.textContent = 'Usuário ou senha inválidos'
        passwordField.appendChild(loginError)
        login.addEventListener('input', () => {
            loginError.remove()
        });
        this.password.addEventListener('input', () => {
            loginError.remove()
        });
    } else {
        window.location.assign(`./pages/patient.html?user_id=${user.id}`)
    }
}

loginForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    await getUserLogin(login.value, password.value)
});