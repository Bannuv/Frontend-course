// Primitives (Single Values)

let movieName = "Sankrathi Vastunam"; 
let rating = 4.5; 
let isBlockbuster = true; 

console.log(movieName);
console.log(rating);
console.log(isBlockbuster);
console.log("movieName",movieName);

// Non-Primitives (Objects/Collections)
let movie = { 
  name: "Daku Maharaj", 
  genre: "Action" ,
  

}; // Object


let showTimes = ["10AM", "2PM", "6PM"]; // Array

console.log(showTimes);

console.log(movie);
console.log(showTimes);
console.log(movie.genre);
console.log(movie.name);

// Create movie object with array
let myMovie = {
  title: "Your Favorite Movie",
  actors: ["Actor1", "Actor2"],
  rating: 4.8,
  is3D: false
};

console.log(myMovie)
console.log(myMovie.actors)
console.log(myMovie.title.is3D)
console.log(myMovie.rating)

// 2. Creating Objects & Arrays

let movie1 = { 
  name: "Game Changer", 
  director: "Rajamouli" 
};

// 2. Empty Object + Properties
let movie2 = {};
movie2.name = "RRR";
movie2.budget = "500Cr";

// 3. From Existing Object
let movie3 = Object.create(movie1);
movie3.name = "Bahubali";

// 3 Ways to Create Arrays
let prices = [250, 300, 400]; // Literal
let seats = new Array(60, 60, 60); // Constructor
let codes = Array.from("A12B34"); // From string

console.log(movie1);
console.log(movie1.director);

console.log(movie2);
console.log(movie2.budget);

console.log(movie3);
console.log(movie3.name);

console.log(prices);
console.log(seats);
console.log(codes);
console.log(prices,seats,codes);