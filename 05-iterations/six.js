// const coding = ["Javascript", "Python", "Java", 'C++', "Ruby", "PHP"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values); // This will log 'undefined' because forEach does not return a value

// filter : filter returns a new array with all elements that pass the test implemented by the provided function
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = nums.filter((num) => num > 4); // implicit return
// another way using scope then we have to use return keyword
const newNums2 = nums.filter((num) => {
  return num > 4; // Explicit return
});
// console.log(newNums2);

// using for each
const newNums3 = [];
nums.forEach((num) => {
  if (num > 4) {
    newNums3.push(num);
  }
});
console.log(newNums3);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    publish: 1981,
    edition: 5,
  },
  {
    title: "Book Two",
    genre: "Non Fiction",
    publish: 2004,
    edition: 2,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1800,
    edition: 19,
  },
  {
    title: "Book Four",
    genre: "Science",
    publish: 2009,
    edition: 12,
  },
  {
    title: "Book Five",
    genre: "Civic",
    publish: 2001,
    edition: 17,
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 2000,
    edition: 10,
  },
  {
    title: "Book Seven",
    genre: "Non Fiction",
    publish: 1990,
    edition: 3,
  },
  {
    title: "Book Eight",
    genre: "Science",
    publish: 2019,
    edition: 5,
  },
  {
    title: "Book Nine",
    genre: "Science",
    publish: 2015,
    edition: 7,
  },
];

const userBooks = books.filter( (book) => book.genre === "Fiction")

// books which are published after 2000
const recentBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "Fiction"; // Explicit return
})
console.log("user books", userBooks);
console.log("recent books", recentBooks);

