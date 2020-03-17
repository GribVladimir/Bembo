document.querySelector(".right ul li").addEventListener("click", function(){
    this.classList.toggle("active");
});
document.querySelector(".left-dropdown ul li").addEventListener("click", function(){
    this.classList.toggle("active");
});
document.querySelector(".left-dropdown-mobil ul li").addEventListener("click", function(){
    this.classList.toggle("active");
});

let menuToggle = document.querySelector('#menu-togle');
let mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
};
