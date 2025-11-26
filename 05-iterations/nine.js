// reduce method

const nums = [1, 2, 3];

// using function
const sum = nums.reduce( function (acc, curval) {
    console.log(`acc: ${acc}, curval: ${curval}`);
    return acc + curval;
}, 0)
// console.log(sum)

// const sum = nums.reduce((acc, curval) => {
//   console.log(`acc: ${acc}, curval: ${curval}`);
//   return acc + curval;
// }, 0);

// smart way 
// const sum = nums.reduce( (acc, curval) => acc + curval, 0 )

// console.log(sum);

// const shoppingCart = [
//     { name: "item1", price: 10 },
//     { name: "item2", price: 15 },
//     { name: "item3", price: 20 }
// ]

// const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
// console.log(priceToPay);



