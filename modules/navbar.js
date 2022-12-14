const links = document.querySelectorAll('.link');
const slides = document.querySelectorAll('.slide');

const navbar = () => {
  links.forEach((link, id) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      slides.forEach((slide) => {
        slide.classList.add('disable');
      });
      slides[id].classList.remove('disable');
    });
  });
};

export default navbar;