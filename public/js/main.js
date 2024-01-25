let navbar = document.querySelector('nav')
let body = document.querySelector('body')
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
let iArrow = document.querySelector("#ArrowUp")
let pQuestion = document.querySelectorAll(".pQuestion")
let contentDropdown = document.querySelector(".dropDownContent")
let dropDown = document.querySelector(".dropDown")
let carousel = document.querySelector('.carouselTestimonialContainer')
let btnCarousel = document.querySelectorAll('.btnCarousel')
let firstRowNav = document.querySelector('.firstRowNav')
let btnBurger = document.querySelector('.btnBurger')
let rowBurger = document.querySelector('.rowBurger')
let btnDarkMode = document.querySelector('#btnNav')
let bodySite = document.querySelector('body')
let sectionService = document.querySelector('.services')
let sectionTestimonials = document.querySelector('.testimonials')
let sectionPricing = document.querySelector('.pricing')
let footer = document.querySelector('.gridFooter')
let ulFooter = document.querySelectorAll('.ulFooter')
let containerHeader = document.querySelector('.pContainer')
let h2About = document.querySelector('.h2About')
let h2Service = document.querySelector('.h2Service')
let pService = document.querySelector('#pService')
let h2Features = document.querySelector('.h2Features')
let h2Testimonial = document.querySelector('.h2Testi')
let h2Tech = document.querySelector('.h2Tech')
let h2Pricing = document.querySelector('.h2Pricing')
let h2Contact = document.querySelector('.h2Contact')
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        firstRowNav.style = "padding-top: 0.5%;"
        navbar.style = "height: 80px; transition:0.8s; background-color: rgba(5, 22, 201, 0.8);"
        iArrow.style = "display: block; opacity: 1; transition: 1s;"
    } else {
        navbar.style = "height: 90px; transition:0.8s; background-color: transparent;"
        iArrow.style = "display: none; opacity: 0; transition: 1s;"
    }
})

window.addEventListener('touchstart', () => {
    navbar.style = "height: 90px; transition:0.8s; background-color: transparent;"
})

services.forEach(service => {
    let logo = service.querySelector("i")
    let spanService = service.querySelector("span")
    service.addEventListener('mouseover', () => {
        logoColor = logo.style.color
        service.style.backgroundColor = `${logoColor}`
        service.style.color = "white"
        spanService.style.color = "white"
        service.style.transition = "0.3s"
        logo.style.color = "white"
        logo.style.transition = "0.3s"
    })
    service.addEventListener('mouseout', () => {
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
        btnIA.classList = "techBtn activeTech"
        btnDev.classList = "techBtn inactiveTech"
        btnUI.classList = "techBtn inactiveTech"
    }

})

btnDev.addEventListener('click', () => {

    if (containerDev.style.display == "none") {
        containerDev.style.display = "flex"
        containerIA.style.display = "none"
        containerUI.style.display = "none"
        btnDev.classList = "techBtn activeTech"
        btnIA.classList = "techBtn inactiveTech"
        btnUI.classList = "techBtn inactiveTech"
    }

})

btnUI.addEventListener('click', () => {

    if (containerUI.style.display == "none") {
        containerUI.style.display = "flex"
        containerIA.style.display = "none"
        containerDev.style.display = "none"
        btnUI.classList = "techBtn activeTech"
        btnDev.classList = "techBtn inactiveTech"
        btnIA.classList = "techBtn inactiveTech"
    }

})

btnSwitch.addEventListener('click', () => {
    if (month.style.color == "rgb(133, 118, 251)") {
        year.style.color = "rgb(133, 118, 251)"
        month.style.color = "rgb(205, 205, 205)"
        prix.forEach(montant => {
            let montantAnnee = montant.innerText * 10
            montant.innerHTML = `<i>${montantAnnee}</i>`
        });
        textPrix.forEach(text => {
            text.innerText = " / year"
        });
    } else {
        year.style.color = "rgb(205, 205, 205)"
        month.style.color = "rgb(133, 118, 251)"
        prix.forEach(montant => {
            let montantAnnee = montant.innerText / 10
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
            pQuestion[i].style = "color: #5846F9;"
            iDown[i].style.display = "none"
            iUp[i].style.display = "block"

        } else {
            questions[i].style = "height : 80px; transition: 0.5s;"
            iDown[i].style.display = "block"
            pQuestion[i].style = "color: #2D4964;"
            iUp[i].style.display = "none"
            setTimeout(() => {
                pQuestionInvisible[i].style = "display: none;"
            }, 500)
        }
    })

}

dropDown.addEventListener('mouseover', () => {
    contentDropdown.style = "display: flex;"
})

dropDown.addEventListener('mouseout', () => {
    contentDropdown.style.display = "none"
})

iArrow.addEventListener('click', () => {
    window.scrollTo(0, 0)
    navbar.style = "height: 90px; transition:0.8s; background-color: transparent;"
})

btnCarousel[0].addEventListener('click', () => {
    carousel.style = "transform: translateX(41%); transition: 0.5s;"
    btnCarousel[0].style = "background-color: #5846F9;"
    btnCarousel[1].style = "background-color: transparent;"
    btnCarousel[2].style = "background-color: transparent;"
    btnCarousel[3].style = "background-color: transparent;"
    btnCarousel[4].style = "background-color: transparent;"
})
btnCarousel[1].addEventListener('click', () => {
    carousel.style = "transform: translateX(35%); transition: 0.5s;"
    btnCarousel[0].style = "background-color: transparent;"
    btnCarousel[1].style = "background-color: #5846F9;"
    btnCarousel[2].style = "background-color: transparent;"
    btnCarousel[3].style = "background-color: transparent;"
    btnCarousel[4].style = "background-color: transparent;"
})
btnCarousel[2].addEventListener('click', () => {
    carousel.style = "transform: translateX(0%); transition: 0.5s;"
    btnCarousel[0].style = "background-color: transparent;"
    btnCarousel[1].style = "background-color: transparent;"
    btnCarousel[2].style = "background-color:  #5846F9;"
    btnCarousel[3].style = "background-color: transparent;"
    btnCarousel[4].style = "background-color: transparent;"
})
btnCarousel[3].addEventListener('click', () => {
    carousel.style = "transform: translateX(-30%); transition: 0.5s;"
    btnCarousel[0].style = "background-color: transparent;"
    btnCarousel[1].style = "background-color: transparent;"
    btnCarousel[2].style = "background-color: transparent;"
    btnCarousel[3].style = "background-color:  #5846F9;"
    btnCarousel[4].style = "background-color: transparent;"
})
btnCarousel[4].addEventListener('click', () => {
    carousel.style = "transform: translateX(-41%); transition: 0.5s;"
    btnCarousel[0].style = "background-color: transparent;"
    btnCarousel[1].style = "background-color: transparent;"
    btnCarousel[2].style = "background-color: transparent;"
    btnCarousel[3].style = "background-color: transparent;"
    btnCarousel[4].style = "background-color:  #5846F9;"
})

btnBurger.addEventListener('click', () => {
    if (rowBurger.style.display == "flex") {
        rowBurger.style.display = "none"
        navbar.style = "height: 80px; background-color: rgba(5, 22, 201, 0.8);"
    } else {
        rowBurger.style.display = "flex"
        navbar.style = "height: 80px; background-color: rgba(5, 22, 201, 0.8);"
    }
})

// btnDarkMode.addEventListener('click', () => {
//     if (body.style.backgroundColor == "black") {
//         body.style.backgroundColor = "white"
//         body.style.color = "black"
//         footer.style.color = "white"
//         sectionPricing.style.backgroundColor = "#F9F8FE"
//         sectionService.style.backgroundColor = "#F9F8FE"
//         sectionTestimonials.style.backgroundColor = "#F9F8FE"
//         ulFooter.style.color = "white"
//         navbar.style.color = "white"
//         containerHeader.style.color = "white"
//     } else {
//         header.classList = "header"
//         body.style = "background-color: black;"
//         footer.style.color = "black"
//         sectionPricing.style.backgroundColor = "#121212"
//         sectionService.style.backgroundColor = "#121212"
//         sectionTestimonials.style.backgroundColor = "#121212"
//         // ulFooter.style.color = "black"
//         navbar.style.color = "black"
//         containerHeader.style.color = "black"
//         h2About.style.color = "white"
//         h2Service.style.color = "white"
//         h2Features.style.color = "white"
//         h2Testimonial.style.color = "white"
//         h2Tech.style.color = "white"
//         h2Pricing.style.color = "white"
//         h2Contact.style.color = "white"
//         pService.style.color = "white"
//         btnDev.style.color = "white"
//         btnUI.style.color = "white"
//         btnIA.style.color = "white"
        
//         console.log(header);
//     }
// })