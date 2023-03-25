const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg"]

const chosenImg = images[Math.floor(Math.random()*images.length)]

const imgTag = document.createElement('img')
//imgTag.src = `img/${chosenImg}`
imgTag.src = `https://source.unsplash.com/random/?cuteanimal`

document.querySelector('#bg-img').appendChild(imgTag)
