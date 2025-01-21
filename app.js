// acb.xyz = 100;

// function abc() {
//   console.log(acb.xyz);
// }

// abc();

// console.log(typeof typeof 100); // string

// const arr = [..."chala"]; // string can not be destructure
// console.log(arr);

// console.log(parseInt("10+2"));
// console.log(parseInt("7FM"));
// console.log(parseInt("M7FM"));

// console.log(
//   [1, 2, 3].map((num) => {
//     if (num > 0) return;
//     return num * 2;
//   })
// );
// "use strict";
// {
//   function abc() {
//     console.log("derara");
//   }
// }

// abc();

// function abc(a, b) {
//   a = 100;
//   b = 200;
//   return arguments[0] + arguments[1];
// }
// console.log(abc(300, 400));

// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Keyboard", price: 75 },
//   { id: 3, name: "Mouse", price: 25 },
//   { id: 4, name: "Monitor", price: 300 },
// ];

// const productsName = products
//   .map((product) => product.name)
//   .filter((product) => product.price === 25);

// console.log(productsName);

// var foo = "foo";

// (function bob(bar) {
//   console.log(bar);
// })(foo);

// console.log(foo);

const html = document.getElementById("html");

const title = "Welcome to My Website";
const description =
  "This is a sample webpage created with dynamic HTML using JavaScript.";
const buttonText = "Click Me";

const htmlTemplate = `
  <div class="container">
    <h1>${title}</h1>
    <p>${description}</p>
    <button>${buttonText}</button>
  </div>
`;

html.innerHTML = htmlTemplate;

// Output: Full HTML string with dynamic content
