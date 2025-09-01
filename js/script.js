const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
    { text: "Dream bigger. Do bigger.", author: "Unknown" },
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" }
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    // Smooth fade effect
    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.textContent = quotes[randomIndex].text;
        authorElement.textContent = "- " + quotes[randomIndex].author;
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 400);
}