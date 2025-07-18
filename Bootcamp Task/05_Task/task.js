// For a given array with prices of 5 items -> [250, 645, 300, 900, have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let MainPrice = [250, 645, 300, 900, 50];
let AfterOfferPrice = [];

MainPrice.forEach((item) => AfterOfferPrice.push(item - (item * 10) / 100));

console.log(AfterOfferPrice);
