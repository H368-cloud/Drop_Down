const subMenu = document.querySelector('.sub-menu-wrap');
const picImg = document.querySelector('.user-pic');

picImg.addEventListener('click', () => {
    subMenu.classList.toggle("open-menu")
});