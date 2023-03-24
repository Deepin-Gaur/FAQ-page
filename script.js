const accordians = document.querySelectorAll('.container')

accordians.forEach(accordian =>{
    const ico = accordian.querySelector('.icon')
    const answ = accordian.querySelector('.answer')

    accordian.addEventListener('click', ()=>{
        ico.classList.toggle('active')
        answ.classList.toggle('activezone')
    })
})