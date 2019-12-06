const button = document.createElement('button')
button.setAttribute('id', 'butt')
button.textContent = 'Click Me!'
document.querySelector('body').appendChild(button)
button.addEventListener('click', (e) => {
  e.target.textContent = 'You clicked the button!'
})