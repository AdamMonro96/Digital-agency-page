"use strict";
let menuButton = document.querySelector(".icons__icon_menu");
let backdrop = document.querySelector(".backdrop");
let menuPoint = document.querySelector(".menu");
let popUp = document.querySelector(".pop-up");
let popUpButton = document.querySelector(".main-screen__button");
let icons = document.querySelector(".icons");

menuButton.addEventListener("click", menuClick);

backdrop.addEventListener("click", backdropSwitch);

menuPoint.addEventListener("click", menuPointClick);

popUpButton.addEventListener("click", popUpClkick);

function menuClick(){
    menuPoint.classList.toggle("hidden");
    backdrop.classList.toggle("visible");
    // Убираем прокрутку
    if(document.body.style.overflow != "hidden")
    document.body.style.overflow = "hidden";
    else
    document.body.style.overflow ='';
}
function menuPointClick(){
    menuPoint.classList.toggle("hidden");
    backdrop.classList.toggle("visible");

    if(document.body.style.overflow == "hidden")
    document.body.style.overflow = '';
}

function backdropSwitch(){
    backdrop.classList.toggle("visible");
    if(!menuPoint.classList.contains("hidden"))
    menuPoint.classList.toggle("hidden");
    if(popUp.classList.contains("pop-up_active"))
    popUp.classList.toggle("pop-up_active");

    if(document.body.style.overflow == "hidden")
    document.body.style.overflow = '';

    if(icons.classList.contains("hidden"))
    icons.classList.remove("hidden");
}
function popUpClkick(){
    popUp.classList.toggle("pop-up_active");
    backdrop.classList.toggle("visible");
    icons.classList.add("hidden");
}

