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