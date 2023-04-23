//Método GET
//Esse método pega os dados da api
//Usa uma função assíncrona para esperar a api responder
const getPatients = async () => {
    const apiResponse = await fetch('http://localhost:3000/patients/')
    const allPatients = await apiResponse.json()
    showPatients(allPatients)
}

// Usa os dados da api para criar conteúdo no html
const showPatients = (patients) => {
    // Cria a variável patient, com dados inviduais de cada paciente
    patients.forEach((patient) => {
        console.log(patient.name)
        // const postHtml = `
        //     <div class="post">
        //         <img src="${realPosts.image}" alt="">
        //         <div>
        //             <h2>${realPosts.title}
        //             </h2>
        //             <p>${realPosts.text}
        //             </p>
        //             <div class="btn">
        //                 <button class="delete-btn" onclick="deletePost (${realPosts.id})">Excluir</button>
        //                 <button class="post-btn" onclick='editPost(${realPosts.id})'>Editar</button>
        //             </div>
        //         </div>
        //     </div>`
        // posts.innerHTML += postHtml
    })
}

getPatients ();
// const cpf = form.elements['cpf']
// const name = form.elements['name']
// const birthday = form.elements['birthday']
// const email = form.elements['email']
// const gender = form.elements['gender']
// const nationality = form.elements['nationality']
// const placeOfBirth = form.elements['placeOfBirth']
// const job = form.elements['job']
// const education = form.elements['education']
// const maritalStatus = form.elements['maritalStatus']
// const mother = form.elements['mother']
// const father = form.elements['father']
// const id = patients.id

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


const atualTable = `
<table>
    <thead class="montserrat-16">
        <tr>
            <th class="code" id="code-th">Código</th>
            <th>Nome</th>
            <th id="cpf-th">CPF</th>
            <th id="action-th">Ações</th>
        </tr>
    </thead>
    <tbody class="montserrat-16">
        <tr>
            <td class="code" onclick="openModal(showPatient)">28</td>
            <td onclick="openModal(showPatient)">Ana Maria</td>
            <td class="cpf-td" onclick="openModal(showPatient)">885.012.130-00</td>
            <td class="actions">
                <div class="icons-wrapper">
                    <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                        alt="medical record button" onclick="goToPage('./medicalRecord.html')">
                    <img class="icon-edit" src="../images/icons/edit.png" alt="edit button" onclick="openModal(editPatient)">
                    <img class="icon-delete" src="../images/icons/delete.png" alt="delete button" onclick="openModal(deleteRegister)">
                </div>
            </td>
        </tr>
        <tr>
            <td class="code">55</td>
            <td>Ana Clara</td>
            <td class="cpf-td">885.012.130-00</td>
            <td class="actions">
                <div class="icons-wrapper">
                    <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                        alt="medical record button">
                    <img class="icon-edit" src="../images/icons/edit.png" alt="edit button">
                    <img class="icon-delete" src="../images/icons/delete.png" alt="delete button" onclick="openModal(deleteRegister)">
                </div>
            </td>
        </tr>
        <td class="code">2452</td>
        <td>Cesar Pinheiro</td>
        <td class="cpf-td">885.012.130-00</td>
        <td class="actions">
            <div class="icons-wrapper">
                <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                    alt="medical record button">
                <img class="icon-edit" src="../images/icons/edit.png" alt="edit button">
                <img class="icon-delete" src="../images/icons/delete.png" alt="delete button" onclick="openModal(deleteRegister)">
            </div>
        </td>
        </tr>
        <tr>
            <td class="code">42</td>
            <td>Carlos Eduardo</td>
            <td class="cpf-td">885.012.130-00</td>
            <td class="actions">
                <div class="icons-wrapper">
                    <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                        alt="medical record button">
                    <img class="icon-edit" src="../images/icons/edit.png" alt="edit button">
                    <img class="icon-delete" src="../images/icons/delete.png" alt="delete button" onclick="openModal(deleteRegister)">
                </div>
            </td>
        </tr>
        <td class="code">2248</td>
        <td>Silvia Moreira</td>
        <td class="cpf-td">885.012.130-00</td>
        <td class="actions">
            <div class="icons-wrapper">
                <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                    alt="medical record button">
                <img class="icon-edit" src="../images/icons/edit.png" alt="edit button">
                <img class="icon-delete" src="../images/icons/delete.png" alt="delete button" onclick="openModal(deleteRegister)">
            </div>
        </td>
        </tr>
        <tr>
            <td class="code">24</td>
            <td>Wander Martins</td>
            <td class="cpf-td">885.012.130-00</td>
            <td class="actions">
                <div class="icons-wrapper">
                    <img class="icon-medical-recorder" src="../images/icons/medical-record.png"
                        alt="medical record button">
                    <img class="icon-edit" src="../images/icons/edit.png" alt="edit button">
                    <img class="icon-delete" src="../images/icons/delete.png" alt="delete button" onclick="openModal(deleteRegister)">
                </div>
            </td>
        </tr>
    </tbody>
</table>`