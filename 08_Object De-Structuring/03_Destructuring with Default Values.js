let book = {
    title: "Bhagvad Gita"
};

let {title, pages = 700} = book;

console.log(title);
console.log(pages);