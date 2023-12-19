let navbar = document.querySelector('nav')
let body =  document.querySelector('body')
let logoService = document.querySelectorAll('#logoService')
let services = document.querySelectorAll('.service')

window.addEventListener('scroll', () => {
    navbar.style.backgroundColor = "rgba(5, 22, 201, 0.8)"
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