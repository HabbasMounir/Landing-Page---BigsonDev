let humburgerIcon=document.querySelector("#humburgerIcon")
let header=document.querySelector("#header")
let nav__bar= document.querySelector(".nav__Bar")
let naver__Bar =document.querySelectorAll(".naver__Bar")

 humburgerIcon.addEventListener("click",function (){ 
     humburgerIcon.classList.toggle("humburger--active")
    header.classList.toggle("header--active")
    nav__bar.classList.toggle("Bar--active")
 }
 )
 naver__Bar.forEach(element => {
    element.addEventListener("click",function (){ 
     humburgerIcon.classList.toggle("humburger--active")
    header.classList.toggle("header--active")
    nav__bar.classList.toggle("Bar--active")
 }
 )
})
