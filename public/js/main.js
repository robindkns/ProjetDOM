let navbar = document.querySelector('nav')
let body =  document.querySelector('body')
let logoService = document.querySelectorAll('#logoService')
let services = document.querySelectorAll('.service')
let btnTech = document.querySelectorAll(".techBtn")
let btnIA = btnTech[0]
let btnDev = btnTech[1]
let btnUI = btnTech[2]
let techContainer = document.querySelectorAll(".techContainer")
let containerIA = techContainer[0]
let containerDev = techContainer[1]
let containerUI = techContainer[2]
let btnSwitch = document.querySelector(".priceCheck")
let switchSpan = document.querySelectorAll(".switchSpan")
let month = switchSpan[0]
let year = switchSpan[1]
let prix = document.querySelectorAll(".montantPrix")
let textPrix = document.querySelectorAll(".pPrix")
let questions = document.querySelectorAll(".question")
let pQuestionInvisible = document.querySelectorAll(".divInvisible")
let iDown = document.querySelectorAll(".iQuestion2")
let iUp = document.querySelectorAll(".iQuestion2UP")

console.log(month.style.color);

window.addEventListener('scroll', () => {
    navbar.style = "height: 80px; transition:0.8s; background-color: rgba(5, 22, 201, 0.8);"
})

services.forEach(service => {
    let logo = service.querySelector("i")
    let spanService = service.querySelector("span")
    service.addEventListener('mouseover',() => {
        logoColor = logo.style.color
        service.style.backgroundColor = `${logoColor}`
        service.style.color = "white"
        spanService.style.color = "white"
        service.style.transition = "0.3s"
        logo.style.color = "white"
        logo.style.transition = "0.3s"
    })
    service.addEventListener('mouseout',() => {
        service.style.backgroundColor = "white"
        logo.style.color = logoColor
        service.style.color = "#2D4964"
        spanService.style.color = "#2D4964"
    })
});

btnIA.addEventListener('click', () => {

    if (containerIA.style.display == "none") {
            containerDev.style.display = "none"
            containerUI.style.display = "none"
            containerIA.style.display = "flex"
    }

})

btnDev.addEventListener('click', () => {

    if (containerDev.style.display == "none") {
        containerDev.style.display = "flex"
        containerIA.style.display = "none"
        containerUI.style.display = "none"
    }

})

btnUI.addEventListener('click', () => {

    if (containerUI.style.display == "none") {
        containerUI.style.display = "flex"
        containerIA.style.display = "none"
        containerDev.style.display = "none"
    }

})

btnSwitch.addEventListener('click', () => {
    if (month.style.color == "rgb(133, 118, 251)") {
        year.style.color = "rgb(133, 118, 251)"
        month.style.color = "rgb(205, 205, 205)"
        prix.forEach(montant => {
            let montantAnnee = montant.innerText*10
            montant.innerHTML = `<i>${montantAnnee}</i>`
        });
        textPrix.forEach(text => {
            text.innerText = " / year"
        });
    } else{
        year.style.color = "rgb(205, 205, 205)"
        month.style.color = "rgb(133, 118, 251)"
        prix.forEach(montant => {
            let montantAnnee = montant.innerText/10
            montant.innerHTML = `<i>${montantAnnee}</i>`
        });
        textPrix.forEach(text => {
            text.innerText = " / month"
        });
    }
})

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        if (pQuestionInvisible[i].style.display == "none") {
            pQuestionInvisible[i].style = "display: flex"
            questions[i].style = "height : 170px; transition: 0.5s;"
            iDown[i].style.display = "none"
            iUp[i].style.display = "block"

        } else {
            questions[i].style = "height : 80px; transition: 0.5s;"
            iDown[i].style.display = "block"
            iUp[i].style.display = "none"
            setTimeout(() => {
                pQuestionInvisible[i].style = "display: none;"
            },500)
        }
    })
    
}