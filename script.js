"use strict";
const pollEl = document.querySelector(".poll");
// DEFAULT PARAMETERS
const bookings = [];

function createBooking(
  flightNum = "234",
  numPassenger = 4,
  price = numPassenger * 200
) {
  // ES 5
  // flightNum ||= "234";
  // numPassenger ||= 100;
  // price ||= 1000;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  bookings.push(booking);
  console.log(bookings);
}

createBooking();
createBooking("A320FF", 200, 1000);
createBooking(undefined, 30, 1000);

// VALUES VS REFERENCE

const flight = "NH320Y";
const adam = {
  name: "Adama",
  passport: 20282323,
};

function checkIn(flightNum, passenger) {
  flightNum = "LH340";
  passenger.name = "Mr. " + passenger.name;

  // if (passenger.passport === 20282323) {
  //   alert("Check In");
  // } else alert("Wrong passport");
}

checkIn(flight, adam);
console.log(flight);
console.log(adam);

function changedPassportNum(passenger) {
  passenger.passport = Math.trunc(Math.random() * 100000);
}

changedPassportNum(adam);
checkIn(flight, adam);

function oneWord(str) {
  return str.replaceAll(" ", "").toLowerCase();
}

const firstLetter2 = (str) => {
  let output = "";
  for (const word of str.split(" ")) {
    // console.log(word)
    // console.log(word[0].toUpperCase() + word.slice(1));
    const newWord = word[0].toUpperCase() + word.slice(1);

    output += newWord + " ";
  }
  return output;
};

const firstLetter = (str) => {
  for (const [first, ...others] of str.split(" ")) {
    console.log([first.toUpperCase(), ...others].join(""));
  }
};

console.log(oneWord("je suis un bon developpeur"));
firstLetter("je suis un bon developpeur");
console.log(firstLetter2("jirai vivre a Londres"));

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(name, flightNum) {
    console.log(
      `${name} booked a flight a seat on ${this.airline} ${this.iataCode}`
    );
    this.bookings.push({ name: name, flightNum });
    console.log(this.bookings);
  },
};

lufthansa.book("Guebre", "LH 320");
lufthansa.book("Adam", "LH 327");

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const EWbook = lufthansa.book.bind(euroWings);

EWbook("Sanou", "EW 340");
const LHbook = lufthansa.book.bind(lufthansa);

LHbook("Zida", "LH 275");

const poll = {
  question: "What's your favourite programming language ?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registeranswer() {
    // Display Prompt
    let pollAnwsers = "";
    for (const option of this.options) {
      pollAnwsers += option + "\n";
    }

    const answer = +prompt(
      `${poll.question}
  ${pollAnwsers.trim("")} \n (Write option number)`
    );
    // Check if answer is valid
    if (answer < 0 || answer >= this.options.length) {
      alert("Invalid answer");
      return;
    }

    // Register answer
    this.answers[answer] += 1;

    // Display Results
    this.displayResults(this.answers,'array');
    this.displayResults(this.answers,'string');
  },

  displayResults(results, type = "array") {
    if (type === "array") {
      console.log(results);
    } else if (type === "string") {
      // const results=...this.answers;
      console.log(`The poll results are`, results.join(","));
    }
  },
};

poll.registeranswer();
pollEl.addEventListener("click", poll.registeranswer.bind(poll));

poll.displayResults.call(poll, [2, 3, 5, 6],'string');
poll.displayResults.call(poll, [2, 3, 5, 6.26,28,50]);
