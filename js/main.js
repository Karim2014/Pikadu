const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

console.log(menuToggle);

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  sidebar.classList.toggle('visible');
})