"use strict"
// // console.log(4 +'5');
// const isChecked = true,
//       isClose = true;
// console.log(isChecked || !isClose);

const numberFiles = +prompt('Сколько фильмов вы уже посмотрели', '');


 const personalMovieDB= {
     count: numberFiles,
     movies:{},
     actors:{},
     geners:[],
     privat: false
 };


     const a = 'kjufy',
           b = prompt('На сколько вы его оцениваете','');
         
   personalMovieDB.movies[a]= b;
   console.log(personalMovieDB)


