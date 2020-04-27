const themeBtn= document.querySelector('#toggletheme')
const toggleBtnClass = document.querySelector('.toggle-btn-dark').classList
const body = document.querySelector('body')
const bodyClass = body.classList
const textColor= document.querySelectorAll('.text-primary')
const cardBG=document.querySelectorAll('.cardBG')




themeBtn.addEventListener('click', e=>{
    bodyClass.toggle("light-theme")
    toggleBtnClass.toggle("toggle-btn-light")

    if(!e.target.checked){
        textColor.forEach((e)=>{
            e.style.color = "hsl(230, 17%, 14%)"
        })
        cardBG.forEach((e)=>{
            e.style.background="hsl(227, 47%, 96%)"
        })

    
    
    } else {
        textColor.forEach((e)=>{
            e.style.color = "white"
        })
        cardBG.forEach((e)=>{
            e.style.background="hsl(228, 28%, 20%)"
        })
    }
        

})