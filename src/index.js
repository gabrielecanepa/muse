import '../assets/stylesheets/application.scss';

const root = document.documentElement;
const darkToggle = document.querySelector('.dark-toggle');

darkToggle.addEventListener('click', (event) => {
  const icon = event.currentTarget.querySelector('i');
  if (icon.classList.contains('fa-moon')) {
    root.style.setProperty('--primary-color', '#000');
    root.style.setProperty('--secondary-color', '#FFF');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    root.style.setProperty('--primary-color', '#FFF');
    root.style.setProperty('--secondary-color', '#000');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});
