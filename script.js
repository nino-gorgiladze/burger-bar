"use strict";

const hamburgeri= document.querySelector('.hamburgeri');
const offmenu = document.querySelector('.off-menu');

hamburgeri.addEventListener('click', () => {
    hamburgeri.classList.toggle('active');
    offmenu.classList.toggle('active');
})


