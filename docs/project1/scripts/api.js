const patientsTable = document.querySelector('#patients-table tbody')

//Método GET
//Esse método pega os dados da api
//Usa uma função assíncrona e espera a api responder
//Pega dados de todos os pacientes
const getPatients = async () => {
    const apiResponse = await fetch('http://localhost:3000/patients/')
    const allPatients = await apiResponse.json()
    showPatients(allPatients)
}

//Pega dados de pacientes individualmente através do id
const getPatient = async (id) => {
    const apiResponse = await fetch(`http://localhost:3000/patients/${id}`)
    const patient = await apiResponse.json()
    patientData(patient)
}

// Método PUT
// Esse método edita o conteúdo da chave através do id.
const putPatient = async (id, post) => {
    await fetch(`http://localhost:3000/patients/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        // Transforma em JSON antes de enviar
        body: JSON.stringify(post)
    })
}

// Usa os dados da api para criar conteúdo no html
const showPatients = (patients) => {
    // Cria a variável patient, com dados inviduais de cada paciente
    patients.forEach((patient) => {
        const newTr = `
            <tr>
                <td class="code" onclick="showPatientForms(${patient.id})">${patient.id}</td>
                <td onclick="showPatientForms(${patient.id})">${patient.name}</td>
                <td class="cpf-td" onclick="showPatientForms(${patient.id})">${patient.cpf}</td>
                <td class="actions">
                    <div class="icons-wrapper">
                        <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                            alt="medical record button">
                        <img class="icon-edit" src="../images/icons/edit.png" alt="edit button" onclick="editPatientForms(${patient.id})">
                        <img class="icon-delete" src="../images/icons/delete.png" alt="delete button" onclick="openModal(deleteRegister)">
                    </div>
                </td>
            </tr>`
        patientsTable.innerHTML += newTr
    })
}

function fillForm(cpf, name, birthday, email, gender, nationality, placeOfBirth, job, education, maritalStatus, mother, father) {
    const cpfInput = document.querySelector('#cpf')
    const nameInput = document.querySelector('#name')
    const birthdayInput = document.querySelector('#birthday')
    const emailInput = document.querySelector('#email')
    const genderSelect = document.querySelector('#gender')
    const nationalitySelect = document.querySelector('#nationality')
    const placeOfBirthInput = document.querySelector('#place-of-birth')
    const occupationInput = document.querySelector('#occupation')
    const educationInput = document.querySelector('#education')
    const maritalStatusSelect = document.querySelector('#marital-status')
    const motherInput = document.querySelector('#mother')
    const fatherInput = document.querySelector('#father')
    cpfInput.value = cpf
    nameInput.value = name;
    birthdayInput.value = birthday;
    emailInput.value = email;
    genderSelect.value = gender;
    nationalitySelect.value = nationality;
    placeOfBirthInput.value = placeOfBirth;
    occupationInput.value = job;
    educationInput.value = education;
    maritalStatusSelect.value = maritalStatus;
    motherInput.value = mother;
    fatherInput.value = father;
}


// Usa os dados da api para criar conteúdo no html
const patientData = (patient) => {
    showPatientForm = `
        <div class="title">
            <div class="title-icon">
                <h1 class="montserrat-24">Dados do paciente</h1>
                <img class="icon-edit" src="../images/icons/edit.png" alt="edit button" onclick="editPatientForms(${patient.id})">
            </div>
            <img class="x" src="../images/icons/x.png" alt="x" onclick="closeModal ()">
        </div>
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="cpf">CPF</label>
                <input class="input" type="text" name="cpf" id="cpf" value="${patient.cpf}" readonly>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="name">Nome</label>
                <input class="input" type="text" name="name" id="name" value="${patient.name}" readonly>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="birthday">Data de Nascimento</label>
                <input class="input" type="text" name="birthday" id="birthday" value="${patient.birthday}" readonly>
            </div>
        </div>
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="email">E-mail</label>
                <input class="input" type="text" name="email" id="email" value="${patient.email}" readonly>
                </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="sex-gender">Sexo/Gênero</label>
                <select class="input select" name="gender" id="gender" disabled value="${patient.gender}">
                    <option value="" disabled>Escolha</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="nationality">Nacionalidade</label>
                <select class="input select" name="nationality" id="nationality" disabled value="${patient.nationality}">
                    <option value="" disabled>Escolha</option>
                    <option value="Brasileiro(a)">Brasileiro(a)</option>                    
                    <option value="Estrangeiro(a)">Estrangeiro(a)</option>
                </select>
            </div>
        </div>
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="place-of-birth">Naturalidade</label>
                <input class="input" type="text" name="Naturalidade" id="place-of-birth" placeholder="Digite" value="${patient.placeOfBirth}" readonly>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="occupation">Profissão</label>
                <input class="input" type="text" name="Profissão" id="occupation" placeholder="Digite" value="${patient.job}" readonly>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="education">Escolaridade</label>
                <input class="input" type="text" name="Escolaridade" id="education" placeholder="Digite" value="${patient.education}" readonly>
            </div>
        </div>
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="marital-status">Estado Civil</label>
                <select class="input  select" name="Estado-Civil" id="marital-status" placeholder="Escolha" disabled value="${patient.maritalStatus}">
                    <option value="" disabled>Escolha</option>
                    <option value="Solteiro(a)">Solteiro(a)</option>
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Separado(a)">Separado(a)</option>
                    <option value="Divorciado(a)">Divorciado(a)</option>
                    <option value="Viúvo(a)">Viúvo(a)</option>
                </select>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="mother">Mãe</label>
                <input class="input" type="text" name="Mãe" id="mother" placeholder="Digite" value="${patient.mother}" readonly>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="father">Pai</label>
                <input class="input" type="text" name="Pai" id="father" placeholder="Digite" value="${patient.father}" readonly>
            </div>
        </div>`
    showPatient.innerHTML += showPatientForm
    document.querySelector('#gender').value = patient.gender
    document.querySelector('#nationality').value = patient.nationality
    document.querySelector('#marital-status').value = patient.maritalStatus
}

const editPatient = (id) => {
    const edit = async () => {
        const apiResponseLocal = await fetch(`http://localhost:3000/patients/${id}`)
        const patient = await apiResponseLocal.json()
        editForm(patient)
    }
    edit()
    function editForm (patient) {
        const editPatientForm = `
            <div class="title">
            <h1 class="montserrat-24">Editar dados do paciente</h1>
            <img class="x" src="../images/icons/x.png" alt="x" onclick="closeModal ()">
            </div>
            <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="cpf">CPF</label>
                <input class="input" type="text" name="cpf" id="cpf" placeholder="Digite" value="${patient.cpf}">
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="name">Nome</label>
                <input class="input" type="text" name="name" id="name" placeholder="Digite" value="${patient.name}">
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="birthday">Data de Nascimento</label>
                <input class="input" type="text" name="birthday" id="birthday" placeholder="Digite" value="${patient.birthday}">
            </div>
            </div>
            <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="email">E-mail</label>
                <input class="input" type="text" name="email" id="email" placeholder="Digite" value="${patient.email}">
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="gender">Sexo/Gênero</label>
                <select class="input  select" name="gender" id="gender" ${patient.gender}>
                    <option value="" disabled selected>Escolha</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino" selected>Feminino</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="nationality">Nacionalidade</label>
                <select class="input  select" name="nationality" id="nationality" ${patient.nationality}>
                    <option value="" disabled selected>Escolha</option>
                    <option value="Brasileiro(a)" selected>Brasileiro(a)</option>
                    <option value="Estrangeiro(a)">Estrangeiro(a)</option>
                </select>
            </div>
            </div>
            <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="place-of-birth">Naturalidade</label>
                <input class="input" type="text" name="place-of-birth" id="place-of-birth" placeholder="Digite" value="${patient.placeOfBirth}">
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="occupation">Profissão</label>
                <input class="input" type="text" name="occupation" id="occupation" placeholder="Digite" value="${patient.job}">
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="education">Escolaridade</label>
                <input class="input" type="text" name="education" id="education" placeholder="Digite" value="${patient.education}">
            </div>
            </div>
            <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="marital-status">Solteiro(a)</label>
                <select class="input  select" name="marital-status" id="marital-status" placeholder="Escolha" value="${patient.maritalStatus}">
                    <option value="" disabled selected>Escolha</option>
                    <option value="Solteiro(a)" selected>Solteiro(a)</option>
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Separado(a)">Separado(a)</option>
                    <option value="Divorciado(a)">Divorciado(a)</option>
                    <option value="Viúvo(a)">Viúvo(a)</option>
                </select>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="mother">Mãe</label>
                <input class="input" type="text" name="mother" id="mother" placeholder="Digite" value="Lurdes Silva">
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="father">Pai</label>
                <input class="input" type="text" name="father" id="father" placeholder="Digite" value="Sandro Silva">
            </div>
            </div>
            <hr>
            <div class="save">
            <p class="poppins-14">*Campos obrigatórios</p>
            <div class="confirm">
                <p class="comfortaa-16" onclick="closeModal ()">Cancelar</p>
                <button class="button-dark" type="submit">Salvar alterações</button>
            </div>
            </div>`
        editPatients.innerHTML += editPatientForm
        document.querySelector('#gender').value = patient.gender
        document.querySelector('#nationality').value = patient.nationality
        document.querySelector('#marital-status').value = patient.maritalStatus
        // Salvar os dados inseridos no form
        editPatients.addEventListener('submit', (event) => {
            // event.preventDefault()
            const cpf = document.getElementById('cpf')
            const name = document.getElementById('name')
            const birthday = document.getElementById('birthday')
            const email = document.getElementById('email')
            const gender = document.getElementById('gender')
            const nationality = document.getElementById('nationality')
            const placeOfBirth = document.getElementById('place-of-birth')
            const job = document.getElementById('occupation')
            const education = document.getElementById('education')
            const maritalStatus = document.getElementById('marital-status')
            const mother = document.getElementById('mother')
            const father = document.getElementById('father')
            const editedPatient = {
                cpf: cpf.value,
                name: name.value,
                birthday: birthday.value,
                email: email.value,
                gender: gender.value,
                nationality: nationality.value,
                placeOfBirth: placeOfBirth.value,
                job: job.value,
                education: education.value,
                maritalStatus: maritalStatus.value,
                mother: mother.value,
                father: father.value,
            }
            putPatient(id, editedPatient)
            // success (editPatients, editRegister)
            // location.reload();
            // closeModal();
        });
    }
}

getPatients ();

//Pesca//
// const modal = document.querySelector('.modal')
// const forms = document.querySelector('#forms')
// const posts = document.querySelector('#posts')
// // const id = posts.

// const getPosts = async () => {
//     const apiResponse = await fetch('http://localhost:3000/posts/')
//     const posts = await apiResponse.json()
//     renderPosts(posts)
// }

// // Método POST
// // Esse médodo insere novos dados na api
// const createPost = async (post) => {
//     await fetch("http://localhost:3000/posts", {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(post)
//     })
// }

// // Método delete
// // Esse médodo deleta dados na api
// const deletePost = async (id) => {
//     await fetch(`http://localhost:3000/posts/${id}`, {
//         method: "DELETE"
//     })
//     location.reload();
// }

// // Método PUT
// // Esse método edita o conteúdo da chave.
// const putPost = async (id, post) => {
//     await fetch(`http://localhost:3000/posts/${id}`, {
//         method: "PUT",
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(post)
//     })
// }

// // Abre o modal
// function openModal(form) {
//     // Remove a classe none
//     modal.classList.remove('none')
//     forms.innerHTML = form
// }

// // Fecha o modal
// function closeModal() {
//     // Adiciona a classe none
//     modal.classList.add('none');
// }

// // Formulário
// // Salvar os dados inseridos no form
// function newPost () {
//     openModal (formNewPost)
//     const form = document.getElementById('form')
//     form.addEventListener('submit', (event) => {
//         event.preventDefault()
//         const titleInput = form.elements['title']
//         const authorInput = form.elements['author']
//         const imageInput = form.elements['image']
//         const textInput = form.elements['text']
//         const newPost = {
//             title: titleInput.value,
//             author: authorInput.value,
//             image: imageInput.value,
//             text: textInput.value,
//         };
//         createPost(newPost)
//         location.reload();
//         closeModal();
//     });
// }

// /* Escuta o evento de clique na classe modal
// Que e pego pela constante modal */
// modal.addEventListener('click', function (e) {
//     if (e.target === modal) {
//         // Fecha o modal
//         closeModal();
//     }
// })

// const renderPosts = (visiblePost) => {
//     // Cria a variável realPosts para colocar no <main> o conteúdo via api
//     visiblePost.forEach((realPosts) => {
//         const postHtml = `
//         <div class="post">
//             <img src="${realPosts.image}" alt="">
//             <div>
//                 <h2>${realPosts.title}
//                 </h2>
//                 <p>${realPosts.text}
//                 </p>
//                 <div class="btn">
//                     <button class="delete-btn" onclick="deletePost (${realPosts.id})">Excluir</button>
//                     <button class="post-btn" onclick='editPost(${realPosts.id})'>Editar</button>
//                 </div>
//             </div>
//         </div>`
//         posts.innerHTML += postHtml
//     })
// }
// getPosts();

// const editPost = (id) => {
//     const edit = async () => {
//         const apiResponseLocal = await fetch(`http://localhost:3000/posts/${id}`)
//         const edit = await apiResponseLocal.json()
//         editForm(edit)
//         // editPosts(edit)
//     }
//     edit()
//     function editForm (edit) {
//     const editForm = `
//         <h2 class="title">Editar post</h2>
//         <form id="form2">
//             <label class="label" for="editTitle">Título</label>
//             <input class="input" name="editTitle" id="title" value="${edit.title}"/>
//             <small></small>
//             <label class="label" for="editAuthor">Autor(a)</label>
//             <input class="input" name="editAuthor" id="author" value="${edit.author}"/>
//             <small></small>
//             <label class="label" for="editImage">Imagem de destaque</label>
//             <input class="input" name="editImage" id="image" value="${edit.image}"/>
//             <small></small>
//             <label class="label" for="editText">Texto</label>
//             <textarea class="input" name="editText" id="text">${edit.text}</textarea>
//             <small></small>
//             <button type="submit" id="submit">SALVAR</button>
//         </form>`
//     openModal (editForm)
//     // Formulário
//     // Salvar os dados inseridos no form
//     const form2 = document.getElementById('form2')
//     form2.addEventListener('submit', (event) => {
//         event.preventDefault()
//         const titleInput = form2.elements['title']
//         const authorInput = form2.elements['author']
//         const imageInput = form2.elements['image']
//         const textInput = form2.elements['text']
//         const editedPost = {
//             title: titleInput.value,
//             author: authorInput.value,
//             image: imageInput.value,
//             text: textInput.value,
//         };
//         putPost(id, editedPost)
//         location.reload();
//         closeModal();
//     });
//     }
// }

// const formNewPost = `
// <h2 class="title">Novo Post</h2>
// <form id="form">
//     <label class="label" for="title">Título</label>
//     <input class="input" name="title" id="title" />
//     <small></small>
//     <label class="label" for="author">Autor(a)</label>
//     <input class="input" name="author" id="author"/>
//     <small></small>
//     <label class="label" for="image">Imagem de destaque</label>
//     <input class="input" name="image" id="image"/>
//     <small></small>
//     <label class="label" for="text">Texto</label>
//     <textarea class="input" name="text" id="text"></textarea>
//     <small></small>
//     <button type="submit" id="submit">SALVAR</button>
// </form>`

const currentPatientEditForm = `
<div class="title">
<h1 class="montserrat-24">Editar dados do paciente</h1>
<img class="x" src="../images/icons/x.png" alt="x" onclick="closeModal ()">
</div>
<div class="fields">
<div class="form-field roboto-form-16">
    <label class="label" for="cpf">CPF</label>
    <input class="input" type="text" name="CPF" id="cpf" placeholder="Digite" value="885.012.130-00">
</div>
<div class="form-field roboto-form-16">
    <label class="label" for="name">Nome</label>
    <input class="input" type="text" name="Nome" id="name" placeholder="Digite" value="Ana Maria">
</div>
<div class="form-field roboto-form-16">
    <label class="label" for="birthday">Data de Nascimento</label>
    <input class="input" type="text" name="Data-de-Nascimento" id="birthday" placeholder="Digite" value="10/09/1998">
</div>
</div>
<div class="fields">
<div class="form-field roboto-form-16">
    <label class="label" for="email">E-mail</label>
    <input class="input" type="text" name="E-mail" id="email" placeholder="Digite" value="ana@gmail.com">
</div>
<div class="form-field roboto-form-16">
    <label class="label" for="sex-gender">Sexo/Gênero</label>
    <select class="input  select" name="Sexo-Gênero" id="sex-gender" >
        <option value="" disabled selected>Escolha</option>
        <option value="option1">Masculino</option>
        <option value="option2" selected>Feminino</option>
        <option value="option3">Outros</option>
    </select>
</div>
<div class="form-field roboto-form-16">
    <label class="label" for="nationality">Nacionalidade</label>
    <select class="input  select" name="Nacionalidade" id="nationality">
        <option value="" disabled selected>Escolha</option>
        <option value="option1" selected>Brasileiro(a)</option>
        <option value="option2">Estrangeiro(a)</option>
    </select>
</div>
</div>
<div class="fields">
<div class="form-field roboto-form-16">
    <label class="label" for="place-of-birth">Naturalidade</label>
    <input class="input" type="text" name="Naturalidade" id="place-of-birth" placeholder="Digite" value="Belo Horizonte">
</div>
<div class="form-field roboto-form-16">
    <label class="label" for="occupation">Profissão</label>
    <input class="input" type="text" name="Profissão" id="occupation" placeholder="Digite" value="Engenheira">
</div>
<div class="form-field roboto-form-16">
    <label class="label" for="education">Escolaridade</label>
    <input class="input" type="text" name="Escolaridade" id="education" placeholder="Digite" value="Ensino Superior">
</div>
</div>
<div class="fields">
<div class="form-field roboto-form-16">
    <label class="label" for="marital-status">Solteiro(a)</label>
    <select class="input  select" name="Estado-Civil" id="marital-status" placeholder="Escolha">
        <option value="" disabled selected>Escolha</option>
        <option value="option1" selected>Solteiro(a)</option>
        <option value="option2">Casado(a)</option>
        <option value="option3">Separado(a)</option>
        <option value="option4">Divorciado(a)</option>
        <option value="option5">Viúvo(a)</option>
    </select>
</div>
<div class="form-field roboto-form-16">
    <label class="label" for="mother">Mãe</label>
    <input class="input" type="text" name="Mãe" id="mother" placeholder="Digite" value="Lurdes Silva">
</div>
<div class="form-field roboto-form-16">
    <label class="label" for="father">Pai</label>
    <input class="input" type="text" name="Pai" id="father" placeholder="Digite" value="Sandro Silva">
</div>
</div>
<hr>
<div class="save">
<p class="poppins-14">*Campos obrigatórios</p>
<div class="confirm">
    <p class="comfortaa-16" onclick="closeModal ()">Cancelar</p>
    <button class="button-dark" type="button" onclick="success (editPatient, editRegister)">Salvar alterações</button>
</div>
</div>`