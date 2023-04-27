const patientsTable = document.querySelector('#patients-table tbody')

function newTr (id, cpf, name) {
    const newTr = `
        <tr>
            <td class="code" onclick="showPatientForms(${id})">${id}</td>
            <td onclick="showPatientForms(${id})">${name}</td>
            <td class="cpf-td" onclick="showPatientForms(${id})">${cpf}</td>
            <td class="actions">
                <div class="icons-wrapper">
                    <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                        alt="medical record button" onclick="medicalRecordPage(${id})">
                    <img class="icon-edit" src="../images/icons/edit.png" alt="edit button" onclick="editPatientForms(${id}); showIdentification (${id});">
                    <img class="icon-delete" src="../images/icons/delete.png" alt="delete button" onclick="deletePatient (${id})">
                </div>
            </td>
        </tr>`
    return newTr
}

function patientForm (cpf, name, birthday, email, gender, nationality, placeOfBirth, job, education, maritalStatus, mother, father) {
    const patientForm = `
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="cpf">CPF</label>
                <input class="input" type="text" name="cpf" id="cpf" placeholder="Digite" value="${cpf}" >
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="name">Nome</label>
                <input class="input" type="text" name="name" id="name" placeholder="Digite" value="${name}" >
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="birthday">Data de Nascimento</label>
                <input class="input" type="text" name="birthday" id="birthday" placeholder="Digite" value="${birthday}" >
            </div>
        </div>
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="email">E-mail</label>
                <input class="input" type="text" name="email" id="email" placeholder="Digite" value="${email}" >
                </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="sex-gender">Sexo/Gênero</label>
                <select class="input select" name="gender" id="gender" value="${gender}">
                    <option value="" disabled>Escolha</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="nationality">Nacionalidade</label>
                <select class="input select" name="nationality" id="nationality" placeholder="Digite" value="${nationality}">
                    <option value="" disabled>Escolha</option>
                    <option value="Brasileiro(a)">Brasileiro(a)</option>                    
                    <option value="Estrangeiro(a)">Estrangeiro(a)</option>
                </select>
            </div>
        </div>
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="place-of-birth">Naturalidade</label>
                <input class="input" type="text" name="place-of-birth" id="place-of-birth" placeholder="Digite" value="${placeOfBirth}" >
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="occupation">Profissão</label>
                <input class="input" type="text" name="occupation" id="occupation" placeholder="Digite" value="${job}" >
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="education">Escolaridade</label>
                <input class="input" type="text" name="education" id="education" placeholder="Digite" value="${education}" >
            </div>
        </div>
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="marital-status">Estado Civil</label>
                <select class="input  select" name="marital-status" id="marital-status" placeholder="Escolha"  value="${maritalStatus}">
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
                <input class="input" type="text" name="mother" id="mother" placeholder="Digite" value="${mother}" >
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="father">Pai</label>
                <input class="input" type="text" name="father" id="father" placeholder="Digite" value="${father}" >
            </div>
        </div>`
    return patientForm
}

function pacienteIdentification (name, birthday, job, education) {
    const identification = `
        <div>
            <div class="img-title">
                <img src="../images/icons/user.png" alt="user icon">
                <h4>Paciente</h4>
            </div>
            <p>${name}</p>
        </div>
        <div>
            <div class="img-title">
                <img src="../images/icons/calendar.png" alt="calendar icon">
                <h4>Nascimento</h4>
            </div>
            <p>${birthday}</p>
        </div>
        <div>
            <div class="img-title">
                <img src="../images/icons/business.png" alt="business case">
                <h4>Profissão</h4>
            </div>
            <p>${job}</p>
        </div>
        <div>
            <div class="img-title">
                <img src="../images/icons/document.png" alt="document icon">
                <h4>Escolaridade</h4>
            </div>
            <div>
                <p>${education}</p>
            </div>
        </div>`
        return identification
}

function medicalRecordPage (id) {
    window.location.assign(`./medicalRecord.html?id=${id}`);
}

const showIdentification = async (id) => {
    // Cria a variável patient, com dados inviduais de cada paciente
    const patient = await getPatients(id)
    const identification = document.querySelector('#patient-identification')
    identification.innerHTML += pacienteIdentification(patient.name, patient.birthday, patient.job, patient.education)
}

// Formulário
function newPatients () {
    const patientformElement = document.createRange().createContextualFragment(patientForm('','','','','','','','','','','',''))
    newPatient.insertBefore(patientformElement, newPatient.querySelector('hr'))
    document.querySelector('#gender').value = ''
    document.querySelector('#nationality').value = ''
    document.querySelector('#marital-status').value = ''
    modal.classList.remove('none')
    newPatient.classList.remove('none')
    newPatient.addEventListener('submit', (event) => {
        event.preventDefault()
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
        const newPatientData = {
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
        createPatient(newPatientData)
        console.log(newPatientData)
        success (newPatient, createRegister)
    });
}

//Método GET
//Esse método pega os dados da api
//Usa uma função assíncrona e espera a api responder
const getPatients = async (id = '') => {
    const apiResponse = await fetch(`http://localhost:3000/patients/${id}`);
    return await apiResponse.json()
}

const getMedicalRecorder = async (id = '') => {
    const apiResponse = await fetch(`http://localhost:3000/medicalRecorder/${id}?_expand=patients`);
    return await apiResponse.json()
}

// Método POST
// Esse médodo insere novos dados na api
const createPatient = async (patient) => {
    await fetch("http://localhost:3000/patients", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
}

// Método PUT
// Esse método edita o conteúdo da chave através do id.
const putPatient = async (id, patient) => {
    await fetch(`http://localhost:3000/patients/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        // Transforma em JSON antes de enviar
        body: JSON.stringify(patient)
    })
}

// Método delete
// Esse médodo deleta dados na api
const deletePatient = async (id) => {
    await fetch(`http://localhost:3000/patients/${id}`, {
        method: "DELETE"
    })
    openModal(deleteRegister)
}

const showPatients = async () => {
    // Cria a variável patient, com dados inviduais de cada paciente
    const allPatients = await getPatients()
    allPatients.forEach((patient) => {
        patientsTable.innerHTML += newTr (patient.id, patient.cpf, patient.name)
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

const patientData = async (id) => {
    // Cria a variável patient, com dados inviduais de cada paciente
    const patient = await getPatients(id)
    showPatient.innerHTML += patientForm (patient.cpf, patient.name, patient.birthday, patient.email, patient.gender, patient.nationality, patient.placeOfBirth, patient.job, patient.education, patient.maritalStatus, patient.mother, patient.father)
    document.querySelector('#gender').value = patient.gender
    document.querySelector('#nationality').value = patient.nationality
    document.querySelector('#marital-status').value = patient.maritalStatus

    showPatient.querySelector('.icon-edit').addEventListener('click', function() {
        const patientformElement = document.createRange().createContextualFragment(patientForm( patient.cpf, patient.name, patient.birthday, patient.email, patient.gender, patient.nationality, patient.placeOfBirth, patient.job, patient.education, patient.maritalStatus, patient.mother, patient.father))
        editPatients.insertBefore(patientformElement, editPatients.querySelector('hr'));
        editPatients.querySelector('#gender').value = patient.gender
        editPatients.querySelector('#nationality').value = patient.nationality
        editPatients.querySelector('#marital-status').value = patient.maritalStatus
        editPatients.classList.remove('none')
        showPatient.remove()
    // Salvar os dados inseridos no form
    editPatients.addEventListener('submit', (event) => {
        event.preventDefault()
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
        success (editPatients, editRegister)
    });
        // editPatientForms(patient.id)
        // console.log(patient.id, patient.gender, patient.nationality, patient.maritalStatus)
    
    })
}

const editPatient = async (id) => {
    const patient = await getPatients(id)
    const patientformElement = document.createRange().createContextualFragment(patientForm( patient.cpf, patient.name, patient.birthday, patient.email, patient.gender, patient.nationality, patient.placeOfBirth, patient.job, patient.education, patient.maritalStatus, patient.mother, patient.father))
    editPatients.insertBefore(patientformElement, editPatients.querySelector('hr'));
    editPatients.querySelector('#gender').value = patient.gender
    editPatients.querySelector('#nationality').value = patient.nationality
    editPatients.querySelector('#marital-status').value = patient.maritalStatus
    // Salvar os dados inseridos no form
    editPatients.addEventListener('submit', (event) => {
        event.preventDefault()
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
        success (editPatients, editRegister)
    });
}