"use strict";
/* Задание на урок */

let numberOfFilms;
      
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');    
    }
}
start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false 
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из послеледних просмотренных  фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        
    }
}
// rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
        console.log('Вы клссический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log('error');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
// // function showMyDB(privat) => {return privat = false };

// console.log(showMyDB);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();






// урок-2 условия
// const nom = 51;
// урок-3 циклы

// let num = 50;
// while (num <=55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;    
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// урок - функции

// function showFirstMessage() {
//     console.log('ЗдраТуте');
// }
// showFirstMessage();

// function showFirstMessage(text) {
//     console.log(text);
// }
// showFirstMessage('We live in the north');

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 5));
// console.log(calc(6, 2));

// function ret() {
//     let num = 50;

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const calc = (a, b) => {
//     console.log('1');
//     return a + b; 
// };


