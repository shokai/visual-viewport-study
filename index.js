let textInput, textInputHeight, lastScrolledAt

function updateTextInputPosition () {
  const offsetTop = visualViewport.offsetTop + visualViewport.height - textAreaHight;
  textInput.style.setProperty('transform', `translate(${visualViewport.offsetLeft}px, ${offsetTop}px) scale(${1/visualViewport.scale})`)
  const now = Date.now()
  if (lastScrolledAt) {
    textInput.innerHTML = [
      `scroll event interval: ${now - lastScrolledAt}msec`,
      `offsetTop: ${offsetTop}`,
      `visualViewport.height: ${visualViewport.height}`,
      `visualViewport.offsetTop: ${visualViewport.offsetTop}`
    ].join('\n')
  }
  lastScrolledAt = now
}

window.addEventListener('load', () => {
  textInput = document.querySelector('#text-input')
  textAreaHight = textInput.offsetHeight

  const lines = document.querySelector('#lines')
  for (let i = 0; i < 100; i++) {
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
