let textInput, textInputHeight, lastScrolledAt

function updateTextInputPosition () {
  const offsetTop = window.scrollY + visualViewport.height - textAreaHight;
  textInput.style.setProperty('top', `${offsetTop}px`)
  const now = Date.now()
  if (lastScrolledAt) {
    textInput.innerHTML = [
      `scroll event interval: ${now - lastScrolledAt}msec`,
      `offsetTop: ${offsetTop}`,
      `visualViewport.height: ${visualViewport.height}`,
      `visualViewport.offsetTop: ${visualViewport.offsetTop}`,
      `window.scrollY: ${window.scrollY}`
    ].join('\n')
  }
  lastScrolledAt = now
}

window.addEventListener('load', () => {
  textInput = document.querySelector('#text-input')
  textAreaHight = textInput.offsetHeight

  const lines = document.querySelector('#lines')
  for (let i = 0; i < 1000; i++) {
    const line = document.createElement('div')
    line.innerText = i
    lines.appendChild(line)
  }

  updateTextInputPosition()
})

document.addEventListener('scroll', e => {
  console.log(window.visualViewport)
  updateTextInputPosition()
})
