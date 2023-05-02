const emailUserField = document.querySelector('#email-user-field')
const nameUserField = document.querySelector('#name-user-field')
const nameUser = document.querySelector('#name-user')
const emailUser = document.querySelector('#email-user')
const passwordField = document.querySelector('#password-field')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const createUser = document.querySelector('#create-user')

const getUsers = async (email) => {
    const apiResponse = await fetch(`http://localhost:3000/users/?email=${email}`);
    const users = await apiResponse.json();

    if (users.length !== 0) {
        const loginError = document.createElement("small")
        loginError.classList.add('montserrat-12', 'red', 'error')
        loginError.textContent = 'Usuário já cadastrado'
        emailUserField.appendChild(loginError)
        emailUser.addEventListener('input', () => {
            loginError.remove()
        });
    } else {
        next ()
    }
}

async function required (email) {
    if (nameUser.value === '') {
        const loginError = document.createElement("small")
        loginError.classList.add('montserrat-12', 'red', 'error')
        loginError.textContent = 'É preciso de um nome válido!'
        nameUserField.appendChild(loginError)
        nameUser.addEventListener('input', () => {
            loginError.remove()
        })
    } else if (emailUser.value === '') {
        const loginError = document.createElement("small")
        loginError.classList.add('montserrat-12', 'red', 'error')
        loginError.textContent = 'É preciso de um email válido!'
        emailUserField.appendChild(loginError)
        emailUser.addEventListener('input', () => {
            loginError.remove()
        })
    } else {
      await getUsers (email)
    }
}

const postUser = async (user) => {
    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

createUser.addEventListener('submit', async function(event) {
    event.preventDefault();
    if (password.value === confirmPassword.value) {
        const newUserData = {
            name: nameUser.value,
            email: emailUser.value,
            password: password.value,
        }
        postUser (newUserData)
        openModal (userRegister)
    } else {
        const loginError = document.createElement("small")
        loginError.classList.add('montserrat-12', 'red', 'error')
        loginError.textContent = 'As senhas precisão ser iguais'
        passwordField.appendChild(loginError)
        confirmPassword.addEventListener('input', () => {
            loginError.remove()
        });
        password.addEventListener('input', () => {
            loginError.remove()
        });
    }
});