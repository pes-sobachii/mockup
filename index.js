const header = document.querySelector('header');
const section = document.querySelector('section');

document.addEventListener('scroll', () => {

    let scrollPosition = window.scrollY;
    let sectionPosition = section.offsetTop;

    console.log(scrollPosition, sectionPosition);

    if (scrollPosition >= 60) {
        header.classList.add('blured');
    } else {
        header.classList.remove('blured');
    }
})