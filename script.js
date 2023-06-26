const menuBtn = document.querySelector('#menuOpen');
const menuList = document.querySelector('#menuList');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
        nav.removeAttribute('id');
        menuBtn.src = './images/menu.png';
    }
    else {
        menuList.style.display = 'block';
        nav.id = 'navg';
        menuBtn.src = './images/close.png';
    }
});