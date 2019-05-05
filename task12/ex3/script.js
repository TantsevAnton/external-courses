const rating = document.querySelector('.rating');
const stars = [];

for (let i = 0; i < 10; i++) {
    stars[i] = document.createElement('div');
    stars[i].innerHTML = '';
    stars[i].classList.add('star');
    if (i % 2 === 0) {
        stars[i].classList.add('left_side');
    } else {
        stars[i].classList.add('right_side');
    }
    rating.appendChild(stars[i]);
    stars[i].addEventListener('click', () => {handler(stars, i)});
}

stars[0].innerHTML = '';
stars[1].innerHTML = '';

function handler(stars, index) {
    for (let i = 0; i <= index; i++) {
        stars[i].innerHTML = '';
    }
    for (let i = index + 1; i < stars.length; i++) {
        stars[i].innerHTML = '';
    }
}
