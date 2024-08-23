"use strict";

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

  if (passenger.passport === 20282323) {
    alert("Check In");
  } else alert("Wrong passport");
}

checkIn(flight, adam);
console.log(flight);
console.log(adam);

function changedPassportNum(passenger) {
  passenger.passport = Math.trunc(Math.random() * 100000);
}

changedPassportNum(adam);
checkIn(flight,adam)
