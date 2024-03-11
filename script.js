const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is what happens when you're busy making other plans. - John Lennon"
];

// Function to generate a random quote
function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quote");
    quoteDisplay.textContent = quotes[randomNumber];
}

// Generate a quote when the page loads
generateQuote();

// Event listener for the "New Quote" button
document.getElementById("new-quote-btn").addEventListener("click", generateQuote);