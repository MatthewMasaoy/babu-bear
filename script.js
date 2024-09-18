// JavaScript to toggle the mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const closeMenu = document.getElementById('close-menu');  // New: Close logo/text

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

// Add event listener to close the menu when clicking the logo/text
closeMenu.addEventListener('click', () => {
    navbar.classList.remove('open');  // This will only close it, not toggle
});

function openModal(src) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
