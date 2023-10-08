const menuLinks = document.getElementById('menu-links');
const close = document.getElementById('close');
const menubar = document.getElementById('menubar');
const overlay = document.getElementById('overlay');

function openMenu() {
    menuLinks.classList.replace('max-[600px]:right-full', 'max-[600px]:right-0');
    overlay.classList.replace('hidden', 'block');
}
function closeMenu() {
    menuLinks.classList.replace('max-[600px]:right-0', 'max-[600px]:right-full');
    overlay.classList.replace('block', 'hidden');
}
menubar.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)