const moblieBtn = document.getElementById('mobile-btn');
nav = document.querySelector('nav');
moblieBtnExit = document.getElementById('mobile-btn-exit');

moblieBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})