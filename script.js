/*MENU BURGER*/
'use strict'

$('.menu-container, .logo-zentral').click (function(){
    $('.menu-container').toggleClass('is-menu-open');
    $('.sidenav').toggleClass('over');
    $('.sidenav2').toggleClass('over2');
    event.stopPropagation();
});

document.addEventListener("click", function(){
    $('.menu-container').removeClass('is-menu-open');
    $('.sidenav').removeClass('over');
    $('.sidenav2').removeClass('over2');
});

