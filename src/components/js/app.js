// методы массива 
 let use = ['i','go', 'Home']

 delete use[1]

 console.log(use.length);
// -------------------------------------

// Метод splice - позволяет нам добовлять удалять изменить данный элемент
  let arr = ['Я', 'изучаю', 'js']

  arr.splice(1,1)
  console.log(arr);

  let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

  let removed = arr2.splice(0,2)
 console.log(removed);



 let arr3 = ["Я", "изучаю", "JavaScript"];

 arr3.splice(2,0,'Сложный','Язык')

console.log(arr3);

// метод  slice он возврощает новый массив копирует ее элементы 
let arr4 = [22,33,44,55,66,77]
let f =  arr4.slice(1,4)
console.log(f);

//Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
let arr5 = [1,2]
console.log(arr5.concat([3,4],['lena','casha', function () {}]));


let massiv  = [1, 2];

let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(massiv.concat( arrayLike));

//Метод arr.forEach позволяет запускать функцию для каждого элемента массива.\
let user = ['Lena','Sasha', 'Max',' naruto'].forEach((item, index, array) => {
 console.log(`${item} позиця ${index} в ${array}`);
})

//Поиск в массиве
let arr6 = [1, 'user', 'name', false]
console.log(arr6.includes(2)); // возврощает булевое значение 

//многомерный массивы
let users =  [
  {id: 1, name: "Naruto"},
  {id: 2, name: "Boruto"},
  {id: 3, name: "Ilena"}
]

let usez = users.find(item => item.id == 1)
console.log(usez.name);

//Преобразование массива 
// map Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
 let lengths  =["Bilbo", "Gandalf", "Nazgul"].map(item => item.length)
 console.log(lengths);



 // sort Он возвращает отсортированный массив
  let res = [1,3,1,4,5]

  console.log(res.sort());


//reverse меняет порядок элементов на оборот
 let arrss = [1,2,3,4,5,6]
 arr.reverse()
 console.log(arr);

 // split and join 
 //split Он разбивает строку на массив по заданному разделителю delim.
 let names = 'Murad, Naruto, Lena'
  
 let arrs  = names.split(',')

 for(let name of arrs ) {
  console.log(`Получить сообщение от пользователя ${name}`);
 }

 //Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.
 let arsr = ['Вася', 'Петя', 'Маша'];

let str = arsr.join()

console.log(str);
