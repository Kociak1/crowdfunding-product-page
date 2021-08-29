const toggleMenu = document.querySelectorAll('.open_menu, .close_menu')
const menuList = document.querySelector('.menu')
const background = document.querySelector('.background')
const dialog = document.querySelector('.dialog')
toggleMenu.forEach(element => {
    element.addEventListener('click', () => {
        
        toggleMenu[0].classList.toggle('show')
        toggleMenu[1].classList.toggle('show')
        menuList.classList.toggle('show')
        background.classList.toggle('show')
    })
})

const toggleDialog = document.querySelectorAll('.open_dialog, .close_dialog')
const OpenDia = document.querySelector('#open').addEventListener('click', e => {
    
    console.log('opened')
})
toggleDialog.forEach(el => {
    console.log('click')
    el.addEventListener('click', () => {
        console.log('click')
        toggleDialog[0].classList.toggle('show')
        toggleDialog[1].classList.toggle('show')
        dialog.classList.toggle('show')
        background.classList.toggle('show')
    })
})

const box3 = document.querySelector('.box3')

const tp1 = document.querySelector('#tp1')
const tp2 = document.querySelector('#tp2')
const Dane_kart = [
    
    {
        b: 'Bamboo Stand',
        '.pledge': 25,
        p: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        '.left': 101
    },
    
    {
        b: 'Black Edition Stand',
        '.pledge': 75,
        p: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        '.left': 64
    },
    
    {
        b: 'Mahogany Special Edition',
        '.pledge': 200,
        p: " You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        '.left': 0
    },

]

Dane_kart.forEach(element => {
    const karta = document.importNode(tp1.content, true)
    const karta2 = document.importNode(tp2.content, true)
    for(const key in element) {
        try {
        karta.querySelector(key).innerText = element[key]
        karta2.querySelector(key).innerText = element[key]
        } catch (error) {
            console.log(error)
        }
    }
    console.log(element['.left'])
    if(element['.left'] == 0) {
        karta.querySelector('.card').classList.add('disabled')
        karta2.querySelector('label').classList.add('disabled')
    }
    karta2.querySelector('.val').value = element['.pledge']
    karta2.querySelector('.val').setAttribute('min', element['.pledge'])
    box3.appendChild(karta)
    dialog.appendChild(karta2)
})