// Toggle menu button arrow icon
document.getElementById('menuToggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var arrow = document.querySelector('#menuToggle .arrow');

    menu.classList.toggle('show');
    arrow.classList.toggle('down');
    arrow.classList.toggle('up');
});

// Show/hide scroll-to-top button based on scroll position
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

// Scroll to top function
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
