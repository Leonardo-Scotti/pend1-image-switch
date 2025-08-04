'use strict'

const buttonSwitchImage = document.getElementById('switch-image')

const buttonAutoImage = document.getElementById('auto-image')

/*==================================================================*/

buttonSwitchImage.addEventListener('click', switchImage)

function switchImage() {
    const image = document.getElementById('image').value

    document.documentElement.style.setProperty('--bg-image', `url(./img/${image}.jpeg)`)
}

buttonAutoImage.addEventListener('click', autoImage)

function autoImage() {
    const fruits = [
        'banana',
        'laranja',
        'melancia',
        'morango',
        'uva'
    ]

    const randomIndex = Math.floor(Math.random() * fruits.length)

    const autoImage = fruits[randomIndex]

    console.log(autoImage)

    document.documentElement.style.setProperty('--bg-image', `url(./img/${autoImage}.jpeg)`)
}