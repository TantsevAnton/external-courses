let  bookList = document.querySelector('.Results');
let mostRecent = document.querySelector('#mostRecent');

function addBookToList(bookFromJSON) {
    let book = document.createElement('div'); 
    book.id = bookFromJSON.id;  
    book.classList.add('book');
    let bookCover = document.createElement('img');
    bookCover.src = bookFromJSON.image_url;
    let title = document.createElement('span');
    title.classList.add('titles');
    title.innerHTML = bookFromJSON.title;
    let author = document.createElement('span');
    author.classList.add('author');
    author.innerHTML = 'by ' + bookFromJSON.author.firstName + ' ' + bookFromJSON.author.lastName;
    let rating = document.createElement('div');
    rating.classList.add('rating');

    var stars = [];
    var establishedRating;
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
        stars[i].addEventListener('click', () => {handler(stars, i); establishedRating = i});
        stars[i].addEventListener('mouseover', () => {handler(stars, i)});
        stars[i].addEventListener('mouseout', () => handler(stars, establishedRating));
    }
    handler(stars, bookFromJSON.rating*2-1);
    function handler(stars, index) {
        for (let i = 0; i <= index; i++) {
            stars[i].innerHTML = '';
        }
        for (let i = index + 1; i < stars.length; i++) {
            stars[i].innerHTML = '';
        }
    }

    bookList.appendChild(book);
    book.appendChild(bookCover);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(rating);
}

function getData(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if  (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                resolve(json);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function(error) {
            reject(error);
        }

        xhr.send();
    });
}

getData('https://rsu-library-api.herokuapp.com/books')
    .then(books => 
        books.forEach(book =>
            addBookToList(book)))
    .catch(error => console.error(error));

debounce = function (func, time) {
    let delay = null;
    return function (...args) {
        var complete = function() {
            func.apply(this, args);
            delay = null;
        }
        if (delay) {
            clearTimeout(delay);
        }
        delay = setTimeout(complete, time)
    }
}