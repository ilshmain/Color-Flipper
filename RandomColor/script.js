let text = document.querySelector('.text')
let knopka = document.querySelector('.knopka')
let box = document.querySelector('.box')
let tsvet = ' Red'
text.textContent = text.textContent + tsvet

knopka.addEventListener('click', function() {
    text.textContent = 'Background Color:'
    let mas = ['Blue', 'Red', 'Green', 'Yellow', 'Orange']
    let i = Math.floor(Math.random()*mas.length)
    tsvet = mas[i]
    box.style.backgroundColor = mas[i]
    let starTsvet = text.textContent
    text.textContent = starTsvet+' '+tsvet
})