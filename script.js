const quotes = [
  {
    text: "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  }
];

let lastIndex = -1;

document.getElementById("new-quote").addEventListener("click", () => {
  let randomIndex = lastIndex;

  for (let i = 0; i < quotes.length; i++) {
    randomIndex = Math.floor(Math.random() * quotes.length);
    if (randomIndex !== lastIndex) {
      break;
    }
  }

  lastIndex = randomIndex;

  document.getElementById("quote-text").textContent = `"${quotes[randomIndex].text}"`;
  document.getElementById("quote-author").textContent = `--${quotes[randomIndex].author}`;
});
