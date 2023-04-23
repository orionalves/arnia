// const allParagraphs = document.querySelectorAll('.medical-record .text');
// const medicalRecordWidth = document.querySelector('.medical-record').offsetWidth;
// const seeMore = document.createElement('span');
// seeMore.className = 'see-more';
// seeMore.textContent = ' Ver mais';
// const characters = Math.floor(medicalRecordWidth / 3);

// allParagraphs.forEach((text) => {
//   if (text.offsetWidth > characters) {
//     const truncatedText = text.textContent.slice(0, characters) + '...';
//     text.textContent = '';
//     text.appendChild(document.createTextNode(truncatedText));
//     text.appendChild(seeMore);
//   }
// });

// function sliceText() {
    //     const medicalRecordWidth = document.querySelector('.medical-record').offsetWidth;
    //     const seeMore = document.querySelector('.see-more')
    //     const text = document.querySelector('.text');
    //     allParagraphs.forEach(paragraph => {
        //     const characters = Math.floor(medicalRecordWidth / 3)
        //     if (text.paragraph.textContent.length <= characters) {
            //         const fullText = text.paragraph.textContent
            //     } else {
                //         const fullText = `${text.paragraph.textContent.slice(0, characters)}...`
                //         removeNone(seeMore)
                //     }
                //     paragraph.innerHTML = fullText;
                //     });
                // }
                
                // function removeNone(element) {
                    //     // Remove a classe none
                    //     element.classList.remove('none')
                    // }
                    
// const seeMore = '<span class="see-more"> Ver mais</span>'
                    
// function updateText() {
//     const paragraphs = document.querySelectorAll('.medical-record .text');
//     const medicalRecordWidth = document.querySelector('.medical-record').offsetWidth;
//     paragraphs.forEach(paragraph => {
//         const text = paragraph.textContent;
//         const characters = Math.floor(medicalRecordWidth / 3.1);
//         const fullText = text.length <= characters;
//         const formattedText = fullText ? text : `${text.slice(0, characters)}...` + seeMore;
//         paragraph.innerHTML = formattedText;
//     });
// }

// window.addEventListener('resize', updateText);

// updateText();

// document.addEventListener('click', (event) => {
//     if (event.target.classList.contains('see-more')) {
//       const paragraph = event.target.parentNode;
//       const text = paragraph.textContent;
//       expandParagraph(paragraph, text);
//     }
// });
  

// Preciso atualizar isso. Está bugado.
// Funciona
function expandParagraph(paragraph, text) {
    paragraph.innerHTML = text + '<span class="see-more"> Ver menos</span>';
    const seeMoreButton = paragraph.querySelector('.see-more');
    if (seeMoreButton) {
      seeMoreButton.addEventListener('click', () => {
        shrinkParagraph(paragraph, text);
      });
    }
  }
  
  function shrinkParagraph(paragraph, text) {
    const medicalRecordWidth = document.querySelector('.medical-record').offsetWidth;
    const characters = Math.floor(medicalRecordWidth / 3.1);
    const fullText = text.length <= characters;
    const formattedText = fullText ? text : `${text.slice(0, characters)}...` + '<span class="see-more"> Ver mais</span>';
    paragraph.innerHTML = formattedText;
    const seeMoreButton = paragraph.querySelector('.see-more');
    if (seeMoreButton) {
      seeMoreButton.addEventListener('click', () => {
        expandParagraph(paragraph, text);
      });
    }
  }
  
  function updateText() {
    const paragraphs = document.querySelectorAll('.medical-record .text');
    const medicalRecordWidth = document.querySelector('.medical-record').offsetWidth;
    paragraphs.forEach(paragraph => {
      const text = paragraph.textContent;
      const characters = Math.floor(medicalRecordWidth / 3.1);
      const fullText = text.length <= characters;
      const formattedText = fullText ? text : `${text.slice(0, characters)}...` + '<span class="see-more"> Ver mais</span>';
      paragraph.innerHTML = formattedText;
      const seeMoreButton = paragraph.querySelector('.see-more');
      if (seeMoreButton) {
        seeMoreButton.addEventListener('click', () => {
          expandParagraph(paragraph, text);
        });
      }
    });
  }
  
  window.addEventListener('resize', updateText);
  
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('see-more')) {
      const paragraph = event.target.parentNode;
      const text = paragraph.textContent;
      expandParagraph(paragraph, text);
    }
  });
  
  updateText();
  