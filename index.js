let textInput
let textInputHeight

function updateTextInputPosition () {
  const offsetTop = visualViewport.height - textAreaHight + visualViewport.offsetTop;
  textInput.style.setProperty('transform', `translate(${visualViewport.offsetLeft}px, ${offsetTop}px) scale(${1/visualViewport.scale})`)
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
