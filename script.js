/* +++ Задание 1 +++ */

// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,
// };

// for (const key in numbers) {
//   if (numbers.hasOwnProperty.call(numbers, key)) {
//     const element = numbers[key];
//     if (element >= 3) {
//       console.log(`${key}: ${element}`);
//     }
//   }
// }



/* +++ Задание 2 +++ */

// const post = {
//   author: "John", // вывести этот текст
//   postId: 23,
//   comments: [
//     {
//       userId: 10,
//       userName: "Alex",
//       text: "lorem ipsum",
//       rating: {
//         likes: 10,
//         dislikes: 2, // вывести это число
//       },
//     },
//     {
//       userId: 5, // вывести это число
//       userName: "Jane",
//       text: "lorem ipsum 2", // вывести этот текст
//       rating: {
//         likes: 3,
//         dislikes: 1,
//       },
//     },
//   ],
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);



/* +++ Задание 3 +++ */

// const products = [
//   {
//     id: 3,
//     price: 200,
//   },
//   {
//     id: 4,
//     price: 900,
//   },
//   {
//     id: 1,
//     price: 1000,
//   },
// ];

// for (let i = 0; i < products.length; i++) {
//   const element = products[i];
//     for (const key in element) {
//       if (key === 'price') {
//         element[key] = element[key]*2;
//       }
//     }
// }

// console.log(products);



/* +++ Задание 4 +++ */

// const products = [
//   {
//     id: 3,
//     price: 127,
//     photos: ["1.jpg", "2.jpg"],
//   },
//   {
//     id: 5,
//     price: 499,
//     photos: [],
//   },
//   {
//     id: 10,
//     price: 26,
//     photos: ["3.jpg"],
//   },
//   {
//     id: 8,
//     price: 78,
//   },
// ];


// const productsSort = products.slice();

// const productsImg = products.filter((item) => {  //фильтр
//   if (Boolean(item.photos) == true && item.photos.length > 0) return true
// })


// productsSort.sort(function (a, b) {  // сортировка
//   if (a.price > b.price) {
//     return 1;
//   }
//   if (a.price < b.price) {
//     return -1;
//   }
//   // a должно быть равным b
//   return 0;
// });

// console.log(`исходный массив: \n`, products);
// console.log(`массив продуктов в котором есть хоть одна фотография: \n`, productsImg);
// console.log(`массив отсортированный по возрастанию цены: \n`, productsSort)



/* +++ Задание 5 +++ */

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// const days = {}

// for (let i = 0; i < en.length; i++) {
//   days[en[i]] = ru[i]
// }

// console.log(days);
