const patientsTable = document.querySelector('#patients-table tbody')
const filter = document.querySelector('#search')

function newTr (id, cpf, name) {
    const newTr = `
        <tr>
            <td class="code" onclick="showPatientForms(${id})">${id}</td>
            <td onclick="showPatientForms(${id})">${name}</td>
            <td class="cpf-td" onclick="showPatientForms(${id})">${cpf}</td>
            <td class="actions">
                <div class="icons-wrapper">
                    <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                        alt="medical record button" onclick="medicalRecordPage(${id}, new URLSearchParams(window.location.search).get('user_id'))">
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

function newMedicalRecordBox (id, type, title, date, abstract) {
    const edit = (type === 'Sessão') ? 'editSession' : 'editFact'
    const img = (type === 'Sessão') ? '<img src="../images/icons/white-head-heart.png" alt="head wiht haert"></img>' : '<img src="../images/icons/white-pin.png" alt="pin"></img>'
    const newMedicalRecordBox = `
                        <div class="vertical"></div>
                        <div class="circle">
                            ${img}
                        </div>
                        <div class="points-menu montserrat-18" onclick="optionsPointsMenu.classList.remove('none')">...</div>
                            <div class="none options-points-menu">
                            <div class="blue" onclick="openModal(${edit}); showEditMedicalRecord (${id})">
                                <img class="icon" src="../images/icons/edit02.png" alt="edit button">
                                <p class="montserrat-16">Editar</p>
                            </div>
                            <div class="red" onclick="deleteMedicalRecord(${id})">
                                <img class="icon" src="../images/icons/delete02.png" alt="delete">
                                <p class="montserrat-16">Excluir</p>
                            </div>
                        </div>
                        <h4 class="montserrat-18">${title}</h4>
                        <p class="montserrat-14">${date}</p>
                        <p class="montserrat-16 text">${abstract}</p>`
    return newMedicalRecordBox
}

function medicalAnotation (id, type, title, date, start, end, abstract, value, paymentFormat, paymentStatus) {
    const edit = (type === 'Sessão') ? 'editSession' : 'editFact'
    const anotationData = (type === 'Sessão') ? `<p class="montserrat-14">${date} | ${start}h - ${end}h</p>` : `<p class="montserrat-14">${date}</p>`
    const payment = `
    <h4 class="montserrat-16">Pagamento</h4>
    <div class="payment montserrat-12">
        <div>
            <p>Valor</p>
            <p>R$${value}</p>
        </div>
        <div>
            <p>Forma de pagamento</p>
            <p>${paymentFormat}</p>
        </div>
        <div>
            <p>Status</p>
            <p>${paymentStatus}</p>
        </div>
    </div>`
    const fullAnotation = `
            <div class="edition">
                <img class="icon icon-edit" src="../images/icons/edit.png" alt="edit button" onclick="openModal(${edit}); showEditMedicalRecord (${id})">
                <img class="icon icon-delete" src="../images/icons/delete.png" alt="delete" onclick="deleteMedicalRecord(${id})">
            </div>
            <h3 class="montserrat-18">${title}</h3>
                ${anotationData}
            <p class="montserrat-16">${abstract}</p>`
    return (type === 'Sessão') ? fullAnotation + payment : fullAnotation
}

function medicalRecordForm (id, type, title, date, start, end, abstract, value, paymentFormat) {
    const save = (id === '') ? 'Criar' : 'Salvar'
    const bottom = `
        <div class="bottom">
        <hr>
        <div class="save">
            <p class="poppins-14">*Campos obrigatórios</p>
            <div class="confirm">
                <p class="comfortaa-16" onclick="location.reload()">Cancelar</p>
                <button class="button-dark" type="submit">${save}</button>
            </div>
        </div>
        </div>`
    const sessionForm = `
        <div class="scroll-wrapper">
            <div class="number-title">
                <div class="green-circle montserrat-18">1</div>
                <h4 class="montserrat-18">Dados Gerais</h4>
            </div>
            <div class="fields">
                <div class="form-field roboto-form-16">
                    <label class="label" for="date">Data*</label>
                    <input class="input" type="text" name="date" id="date" placeholder="Digite" value="${date}">
                </div>
                <div class="form-field roboto-form-16">
                    <label class="label" for="start">Hora de início*</label>
                    <input class="input" type="text" name="start" id="start" placeholder="Digite" value="${start}">
                </div>
                <div class="form-field roboto-form-16">
                    <label class="label" for="end">Hora fim*</label>
                    <input class="input" type="text" name="end" id="end" placeholder="Digite" value="${end}">
                </div>
            </div>
            <hr>
            <div class="number-title">
                <div class="green-circle montserrat-18">2</div>
                <h4 class="montserrat-18">Sessão</h4>
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="title">Título*</label>
                <input class="input" type="text" name="title" id="title" placeholder="Digite" value="${title}">
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="abstract">Resumo da sessão*</label>
                <textarea class="textarea" name="abstract" id="abstract" placeholder="Texto">${abstract}</textarea>
            </div>
            <hr>
            <div class="number-title">
                <div class="green-circle montserrat-18">3</div>
                <h4 class="montserrat-18">Dados Gerais</h4>
            </div>
            <div class="fields">
                <div class="form-field roboto-form-16">
                    <label class="label" for="value">Valor</label>
                    <input class="input" type="text" name="value" id="value" placeholder="Digite" value="${value}">
                </div>
                <div class="form-field roboto-form-16">
                    <label class="label" for="payment">Forma de pagamento</label>
                    <select class="input select" name="Forma-de-pagamento" id="payment" value="${paymentFormat}">
                        <option value="Não pago">Não pago</option>
                        <option value="PIX">PIX</option>
                        <option value="Débito">Débito</option>
                        <option value="Crédito">Crédito</option>
                    </select>
                </div>
                <div class="form-field roboto-form-16">
                    <p>Status</p>
                    <div class="flex">
                        <div class="radio">
                            <input type="radio" id="paid" name="payment" value="Pago">
                            <label for="paid">Pago</label>
                        </div>
                        <div class="radio">
                            <input type="radio" id="not-paid" name="payment" value="Não pago">
                            <label for="not-paid">Não pago</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="montserrat-14 image-text">
                <img src="../images/icons/green-pin.svg" alt="green pin">
                <P><span class="strong">Dica: </span>Registrar os pagamentos das sessões irá te <br> auxiliar na sua
                    organização financeira.
                </P>
            </div>
        </div>`
    const relevantFactForm=`
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="date">Data*</label>
                <input class="input" type="text" name="date" id="date" placeholder="Digite" value="${date}">
            </div>
            <div class="form-field roboto-form-16">
                <label class="label" for="title">Título*</label>
                <input class="input" type="text" name="title" id="title" placeholder="Digite" value="${title}">
            </div>
        </div>
        <div class="fields">
            <div class="form-field roboto-form-16">
                <label class="label" for="description">Descrição*</label>
                <textarea class="textarea" name="description" id="description"
                    placeholder="Texto">${abstract}</textarea>
            </div>
        </div>`
    return (type === 'Sessão') ? sessionForm + bottom : relevantFactForm + bottom
}

function medicalRecordPage (id, userId) {
    window.location.assign(`./medicalRecord.html?id=${id}&user_id=${userId}`);
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
        success (newPatient, createRegister)
    });
}

const getMedicalRecord = async (id) => {
    const apiResponse = await fetch(`http://localhost:3000/medicalRecord?_sort=id&_order=desc&patient_id=${id}`);
    return await apiResponse.json()
}

const getFilterMedicalRecord = async (find) => {
    const apiResponse = await fetch(`http://localhost:3000/medicalRecord/?_sort=id&_order=desc&q=${find}`)
    return await apiResponse.json();
}

const getMedicalRecordFilter = async (id, type, find) => {
    const apiResponse = await fetch(`http://localhost:3000/medicalRecord?_sort=id&_order=desc&patient_id=${id}&type=${type}&q=${find}`);
    return await apiResponse.json()
}

const getMedicalRecordFilterAll = async (id, find) => {
    const apiResponse = await fetch(`http://localhost:3000/medicalRecord?_sort=id&_order=desc&patient_id=${id}&q=${find}`);
    return await apiResponse.json()
}

const getMedicalRecordId = async (id) => {
    const apiResponse = await fetch(`http://localhost:3000/medicalRecord/${id}`);
    return await apiResponse.json()
}

const putMedicalRecord = async (id, medicalRecord) => {
    await fetch(`http://localhost:3000/medicalRecord/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicalRecord)
    })
}

const createMedicalRecord = async (patient) => {
    await fetch("http://localhost:3000/medicalRecord/", {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
}

const deleteMedicalRecord = async (id) => {
    await fetch(`http://localhost:3000/medicalRecord/${id}`, {
        method: "DELETE"
    })
    // showPatients ()
    openModal(deleteRegister)
}

const showAnotations = async (id) => {
    const fullAnotationContent = await getMedicalRecordId(id)
    const anotations = document.querySelector('#full-anotation')
    anotations.innerHTML = ''
    anotations.innerHTML = medicalAnotation (fullAnotationContent.id, fullAnotationContent.type, fullAnotationContent.title, fullAnotationContent.date, fullAnotationContent.start, fullAnotationContent.end, fullAnotationContent.abstract, fullAnotationContent.value, fullAnotationContent.paymentFormat, fullAnotationContent.paymentStatus)
}

const showEditMedicalRecord = async (id) => {
    const editMedicalRecord = await getMedicalRecordId (id)
    const editMedicalRecordForm = (editMedicalRecord.type === "Sessão") ? document.querySelector('#edit-session') : document.querySelector('#edit-fact')
    editMedicalRecordForm.innerHTML += medicalRecordForm (editMedicalRecord.id, editMedicalRecord.type, editMedicalRecord.title, editMedicalRecord.date, editMedicalRecord.start, editMedicalRecord.end, editMedicalRecord.abstract, editMedicalRecord.value, editMedicalRecord.paymentFormat)
    if (editMedicalRecord.type === "Sessão") {
        const paymentSelect = document.getElementById("payment");
        const paidRadio = document.getElementById("paid");
        const notPaidRadio = document.getElementById("not-paid");
        paymentSelect.addEventListener("change", function() {
            if (paymentSelect.value !== "Não pago") {
                paidRadio.disabled = false;
                notPaidRadio.disabled = true;
            } else {
                paidRadio.disabled = true;
                notPaidRadio.disabled = false;
            }
        });
        document.querySelector('#payment').value = editMedicalRecord.paymentFormat
        if (editMedicalRecord.paymentStatus === "Pago") {
        // Adicione o atributo "checked" ao botão de rádio com id "paid"
            document.querySelector('#paid').setAttribute('checked', '')
        } else if (editMedicalRecord.paymentStatus === "Não pago") {
            // Adicione o atributo "checked" ao botão de rádio com id "not-paid"
            document.querySelector('#not-paid').setAttribute('checked', '');
        } else {
        // Não faça nada
        }
    }
    
    editMedicalRecordForm.addEventListener('submit', (event) => {
        event.preventDefault()
        if (editMedicalRecord.type === "Sessão") {
            const title = document.getElementById('title')
            const date = document.getElementById('date')
            const start = document.getElementById('start')
            const end = document.getElementById('end')
            const abstract = document.getElementById('abstract')
            const value = document.getElementById('value')
            const paymentFormat = document.getElementById('payment')
            const paymentStatus = document.querySelector('[name=payment]:checked');
            const editedMedicalRecord = {
                    title: title.value,
                    type: editMedicalRecord.type,
                    date: date.value,
                    start: start.value,
                    end: end.value,
                    abstract: abstract.value,
                    value: value.value,
                    paymentFormat: paymentFormat.value,
                    paymentStatus: paymentStatus.value,
                    patient_id: editMedicalRecord.patient_id
                }
            putMedicalRecord(id, editedMedicalRecord)
            success (editSession, successRegister)
        } else {
            const title = document.getElementById('title')
            const date = document.getElementById('date')
            const abstract = document.getElementById('description')
            const editedMedicalRecord = {
                title: title.value,
                type: editMedicalRecord.type,
                date: date.value,
                start: editMedicalRecord.value,
                end: editMedicalRecord.value,
                abstract: abstract.value,
                value: editMedicalRecord.value,
                paymentFormat: editMedicalRecord.value,
                paymentStatus: editMedicalRecord.value,
                patient_id: editMedicalRecord.patient_id
            }
            putMedicalRecord(id, editedMedicalRecord)
            success (editFact, successRegister)
        }
    })
}

// Formulário
function newMedicalRecord (type) {
    const newMedicalRecord = (type === "Sessão") ? newSession : relevantFact
    newMedicalRecord.innerHTML += medicalRecordForm ('', type, '', '', '', '', '', '', '')
    if (type === "Sessão") {
        document.querySelector('#payment').value = ''
        const paymentSelect = document.getElementById("payment");
        const paidRadio = document.getElementById("paid");
        const notPaidRadio = document.getElementById("not-paid");
        paymentSelect.addEventListener("change", function() {
            if (paymentSelect.value !== "Não pago") {
                paidRadio.disabled = false;
                notPaidRadio.disabled = true;
            } else {
                paidRadio.disabled = true;
                notPaidRadio.disabled = false;
            }
        });
        openModal(newSession)
    } else {
        openModal(relevantFact)
    }
    newMedicalRecord.addEventListener('submit', (event) => {
        event.preventDefault()
        if (type === "Sessão") {
            const title = document.getElementById('title')
            const date = document.getElementById('date')
            const start = document.getElementById('start')
            const end = document.getElementById('end')
            const abstract = document.getElementById('abstract')
            const value = document.getElementById('value')
            const paymentFormat = document.getElementById('payment')
            const paymentStatus = document.querySelector('[name=payment]:checked');
            const editedMedicalRecord = {
                    title: title.value,
                    type: type,
                    date: date.value,
                    start: start.value,
                    end: end.value,
                    abstract: abstract.value,
                    value: value.value,
                    paymentFormat: paymentFormat.value,
                    paymentStatus: paymentStatus.value,
                    patient_id: new URLSearchParams(window.location.search).get('id')
                }
            createMedicalRecord(editedMedicalRecord)
            success (newSession, successRegister)
        } else {
            const title = document.getElementById('title')
            const date = document.getElementById('date')
            const abstract = document.getElementById('description')
            const editedMedicalRecord = {
                title: title.value,
                type: type,
                date: date.value,
                start: '',
                end: '',
                abstract: abstract.value,
                value: '',
                paymentFormat: '',
                paymentStatus: '',
                patient_id: new URLSearchParams(window.location.search).get('id')
            }
            createMedicalRecord(editedMedicalRecord)
            success (relevantFact, successRegister)
        }
    })
}

const showMedicalRecordFilter = async (id, type) => {
    const allMedicalRecords = await getMedicalRecordFilter(id, type, document.querySelector('#search-medical-record').value)
    medicalRecordBoxContainer.innerHTML = ''
    allMedicalRecords.forEach((medicalRecord) => {
        const medicalRecordBox = document.createElement("div")
        medicalRecordBox.classList.add('medical-record')
        medicalRecord.type === "Sessão" ? medicalRecordBox.classList.add('session-box') : medicalRecordBox.classList.add('fact-relevant-box')
        medicalRecordBox.setAttribute('onclick', `openMedicalAnotation(event, ${medicalRecord.id}, ${medicalRecord.patient_id}, new URLSearchParams(window.location.search).get('user_id'));`)
        medicalRecordBoxContainer.appendChild(medicalRecordBox)
        medicalRecordBox.innerHTML += newMedicalRecordBox(medicalRecord.id, medicalRecord.type, medicalRecord.title, medicalRecord.date, medicalRecord.abstract)
    })
    const lateMedicalRecords = document.querySelectorAll('.medical-record');
    lateMedicalRecords.forEach(medicalRecord => {
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
    })
    updateText()
}

const showMedicalRecordFilterAll = async (id) => {
    const allMedicalRecords = await getMedicalRecordFilterAll(id, document.querySelector('#search-medical-record').value)
    medicalRecordBoxContainer.innerHTML = ''
    allMedicalRecords.forEach((medicalRecord) => {
        const medicalRecordBox = document.createElement("div")
        medicalRecordBox.classList.add('medical-record')
        medicalRecord.type === "Sessão" ? medicalRecordBox.classList.add('session-box') : medicalRecordBox.classList.add('fact-relevant-box')
        medicalRecordBox.setAttribute('onclick', `openMedicalAnotation(event, ${medicalRecord.id}, ${medicalRecord.patient_id}, new URLSearchParams(window.location.search).get('user_id'));`)
        medicalRecordBoxContainer.appendChild(medicalRecordBox)
        medicalRecordBox.innerHTML += newMedicalRecordBox(medicalRecord.id, medicalRecord.type, medicalRecord.title, medicalRecord.date, medicalRecord.abstract)
    })
    const lateMedicalRecords = document.querySelectorAll('.medical-record');
    lateMedicalRecords.forEach(medicalRecord => {
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
    })
    updateText()
}

const filterMedicalRecord = async (find) => {
    const allMedicalRecords = await getFilterMedicalRecord(find)
    medicalRecordBoxContainer.innerHTML = ''
    allMedicalRecords.forEach((medicalRecord) => {
        if (medicalRecord.patient_id === new URLSearchParams(window.location.search).get('id')) {

            const medicalRecordBox = document.createElement("div")
            medicalRecordBox.classList.add('medical-record')
            medicalRecord.type === "Sessão" ? medicalRecordBox.classList.add('session-box') : medicalRecordBox.classList.add('fact-relevant-box')
            medicalRecordBox.setAttribute('onclick', `openMedicalAnotation(event, ${medicalRecord.id}, ${medicalRecord.patient_id}, new URLSearchParams(window.location.search).get('user_id'));`)
            medicalRecordBoxContainer.appendChild(medicalRecordBox)
            medicalRecordBox.innerHTML += newMedicalRecordBox (medicalRecord.id, medicalRecord.type, medicalRecord.title, medicalRecord.date, medicalRecord.abstract)
        }
        })
        const lateMedicalRecords = document.querySelectorAll('.medical-record');
        lateMedicalRecords.forEach(medicalRecord => {
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
    })
    updateText()
}

const showMedicalRecord = async (id) => {
    const allMedicalRecords = await getMedicalRecord(id)
    medicalRecordBoxContainer.innerHTML = ''
    allMedicalRecords.forEach((medicalRecord) => {
        const medicalRecordBox = document.createElement("div")
        medicalRecordBox.classList.add('medical-record')
        medicalRecord.type === "Sessão" ? medicalRecordBox.classList.add('session-box') : medicalRecordBox.classList.add('fact-relevant-box')
        medicalRecordBox.setAttribute('onclick', `openMedicalAnotation(event, ${medicalRecord.id}, ${medicalRecord.patient_id}, new URLSearchParams(window.location.search).get('user_id'));`)
        medicalRecordBoxContainer.appendChild(medicalRecordBox)
        medicalRecordBox.innerHTML += newMedicalRecordBox (medicalRecord.id, medicalRecord.type, medicalRecord.title, medicalRecord.date, medicalRecord.abstract)
    })
    const lateMedicalRecords = document.querySelectorAll('.medical-record');
    lateMedicalRecords.forEach(medicalRecord => {
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
    })
    updateText()
}

const getPatients = async (id = '') => {
    const apiResponse = await fetch(`http://localhost:3000/patients/${id}`);
    return await apiResponse.json()
}

const getFilter = async (find, route) => {
    const apiResponse = await fetch(`http://localhost:3000/${route}?q=${find}`)
    return await apiResponse.json();
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
    // showPatients ()
    openModal(deleteRegister)
}

const filterPatients = async (find) => {
    const allPatients = await getFilter(find, 'patients')
    patientsTable.innerHTML = ''
    allPatients.forEach((patient) => {
        patientsTable.innerHTML += newTr (patient.id, patient.cpf, patient.name)
    })
}

const showPatients = async () => {
    const allPatients = await getPatients()
    patientsTable.innerHTML = ''
    allPatients.forEach((patient) => {
        patientsTable.innerHTML += newTr (patient.id, patient.cpf, patient.name)
    })
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
            success (editPatients, successRegister)
        });
    
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
        success (editPatients, successRegister)
    });
}


