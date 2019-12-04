const p1 = document.createElement('p')
p1.setAttribute('id', 'p1')
p1.textContent = 'This was created using textContent method.'
document.querySelector('body').appendChild(p1)

const p2 = document.createElement('p')

// Summary

//     innerHTML parses content as HTML, so it takes longer.
//     nodeValue uses straight text, does not parse HTML, and is faster.
//     textContent uses straight text, does not parse HTML, and is faster.
//     innerText Takes styles into consideration. It won't get hidden text for instance.

// innerText didn't exist in firefox until FireFox 45 according to caniuse but is now supported in all major browsers.