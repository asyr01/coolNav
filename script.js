const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementsById('nav-1');
const nav2 = document.getElementsById('nav-2');
const nav3 = document.getElementsById('nav-3');
const nav4 = document.getElementsById('nav-4');
const nav5 = document.getElementsById('nav-5');

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);