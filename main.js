const btn1 = document.querySelector('.btn--1')
const btn2 = document.querySelector('.btn--2')
const block1 = document.querySelector('.info')
const block2 = document.querySelector('.service')


btn1.addEventListener('click', function(){
    block1.scrollIntoView()
})

btn2.addEventListener('click', function(){
    block2.scrollIntoView()
})