const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
};

jQuery(function () {
    jQuery(document).on('mousemove', function (e) {
        jQuery('#layout1').css({
            left: -e.pageX / 100 + 20,
            top: -e.pageY / 100 + 0
        }); 
        jQuery('#layout2').css({
            right: -e.pageX / 100 - 0,
            top: -e.pageY / 100 + 0
        });       
    });
});