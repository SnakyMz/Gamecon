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

const menus = document.querySelectorAll('#menuList a');
menus.forEach((menu) => {
    menu.addEventListener('click', () => {
        menuList.style.display = 'none';
        nav.removeAttribute('id');
        menuBtn.src = './images/menu.png';
    });
});

const specialGuests = [
    {
        name: 'Andrew Harris',
        title: 'CEO of Electric Arts',
        photo: './images/Andrew.jpg',
        info: 'Executive producer of Electeric Arts Sport and Electric Arts Origin',
    },
    {
        name: 'Brittney Anderson',
        title: 'CEO of Glass Top Games',
        photo: './images/Brittney.jpg',
        info: 'Founder of Glass Top Games and Develeoped Slidebirb',
    },
    {
        name: 'Claudia Smith',
        title: 'CEO of Jo-mei Games',
        photo: './images/Claudia.jpg',
        info: 'Develeoped Ocean of Solitude',
    },
    {
        name: 'Frank Anderson',
        title: 'CEO of Bethes Game Studio',
        photo: './images/Frank.jpg',
        info: 'Founder of Bethes Game Studio and Develeoped Younger Scrolls franchise ',
    },
    {
        name: 'Linda Taylor',
        title: 'CEO of Extremly Decent Games',
        photo: './images/Linda.jpg',
        info: 'Founder of Extremly Decent Games and Develeoped TowerRise, Celesta, Earthsword',
    },
    {
        name: 'Mary Winters',
        title: 'General Manager of Ybox Game Studio',
        photo: './images/Mary.jpg',
        info: 'Founder of 434 Industries and Develeoped Halos franchise',
    },
    {
        name: 'Mia Carter',
        title: 'CEO of Gloom Digital Media',
        photo: './images/Mia.jpg',
        info: 'Developed ShortStory',
    },
    {
        name: 'Robert Watson',
        title: 'Game Developer',
        photo: './images/Watson.jpg',
        info: 'Develeoped Five Nights at Teddys franchise',
    }
]

const guestContainer = document.querySelector('#guestcontainer')
function generateGuests() {
    specialGuests.forEach((person) => {
        const guests = document.createElement('div');
        guests.className = 'guests';
        guests.innerHTML = `
        <img src="${person.photo}" alt="${person.name}" class="guestImg">
        <div class="guestDetail">
            <h3 class="guestName">${person.name}</h3>
            <h5 class="guestTitle">${person.title}</h5>
            <i class="line"></i>
            <p class="guestDesc">${person.info}</p>
        </div>
        `;
        guestContainer.appendChild(guests);
    });
};

window.onload = () => {
    generateGuests();
};