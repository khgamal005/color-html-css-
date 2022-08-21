
// Smooth navigation 
$(' nav .nav-item a ').click(function () {
    $('html,body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);

});

window.addEventListener('scroll', function () {
    let navEl = document.getElementById('navbar');
    let brand = document.getElementById('brand');
    if (window.pageYOffset > 0) {
        navEl.classList.add('customNav');
        brand.classList.add('customNavBrand');
    } else {
        navEl.classList.remove('customNav');
        brand.classList.remove('customNavBrand');
    }
});