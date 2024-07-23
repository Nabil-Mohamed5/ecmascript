function fetchDataWithXHR(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

fetchDataWithXHR("https://api.github.com/user");

async function fetchDataWithFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

fetchDataWithFetch("https://api.github.com/user");

function fetchDataWithAxios(url) {
  axios
    .get(url)
    .then((response) => console.log(response.data))
    .catch((error) =>
      console.error(
        "There has been a problem with your axios operation:",
        error
      )
    );
}

// Example usage:
fetchDataWithAxios("https://api.github.com/user");

// (ES6)
// Rest Operators => allow you to add multiple  elemnnt in an array
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];
// console.log(arr2); // [1, 2, 3, 4, 5, 6]

//promise => provide a way to handle asynchronous operations
// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched!");
//     }, 1000);
//   });
// };

// fetchData()
//   .then((data) => console.log(data)) // Data fetched!
//   .catch((error) => console.error(error));

// fetch => allow you easy way to fetch data with little code
// fetch(url);

// Destructuring  => allow to distract data to variable
// const [a, b] = [1, 2];
// console.log(a);
// console.log(b);

//  Template Literals => allow you to make multi line string
// const multiLine = `This is
// a multi-line
// string.`;
// console.log(multiLine);

// Arrow Functions => provide lexical scope for this
// const add = (a, b) => a + b;
// console.log(add(2, 3));

// const numbers = [1, 2, 3, 4];
// const squares = numbers.map(n => n * n);
// console.log(squares); //
