let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.nav');
let searchbar = document.querySelector('#search-bar');
let search = document.querySelector('.search-form');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');

    // Change text color of navigation elements
    if (mynav.classList.contains('active')) {
        let navLinks = mynav.querySelectorAll('a'); // Assuming your navigation links are <a> elements
        for (let link of navLinks) {
            link.style.color = 'white'; // Change to your desired text color
        }
    } else {
        let navLinks = mynav.querySelectorAll('a');
        for (let link of navLinks) {
            link.style.color = ''; // Reset to default text color or remove the property
        }
    }
};

searchbar.onclick = () => {
    search.classList.toggle('active');
};
