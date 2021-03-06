const quotes = [
    {
        quote: "When you go through hardships and decide not to surrender, that is strength.",
        author: "- Arnold Schwarzenegger -",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "- Walt Disney -",
    },
    {
        quote: "There are better starters than me but I’m a strong finisher.",
        author: "- Usain Bolt -",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "- Robert H. Schuller -",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "- Michael Jordan -",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "- Angelina Jolie -",
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "- Martin Luther King, Jr -",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "- Dwayne Johnson -",
    },
    {
        quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
        author: "- Estée Lauder -",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "- Michael John Bobak -",
    },
]

function handleCloseQuote() {
    quoteBox.classList.add("quote-down");
    setTimeout(function() {
        quoteBox.classList.add("hidden");
        quoteBoxOpen.classList.remove("hidden");
    }, 400);

    quoteBox.classList.remove("quote-up");
}
function handleOpenQuote() {
    quoteBox.classList.add("quote-up");
    quoteBox.classList.remove("hidden");
    quoteBoxOpen.classList.add("hidden");

    quoteBox.classList.remove("quote-down");
}


const quoteBox = document.querySelector("#quote");
const quoteBoxOpen = document.querySelector("#quote-open")

const closeQuote = document.querySelector("#quote span:first-child");
const quote = document.querySelector("#quote span:nth-child(2)");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

closeQuote.addEventListener("click", handleCloseQuote);
console.log(closeQuote)

// QUOTE OPEN

const openQuote = document.querySelector("#quote-open");

openQuote.addEventListener("click", handleOpenQuote);