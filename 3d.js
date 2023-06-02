document.getElementById("url-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var originalUrl = document.getElementById("original-url").value;
    var shortenedUrl = shortenUrl(originalUrl);

    document.getElementById("shortened-url").textContent = "Shortened URL: " + shortenedUrl;
    document.getElementById("url-form").reset();
});

function shortenUrl(url) {
    // Implement your URL shortening algorithm here
    // You can use external APIs or custom logic to generate a short URL
    // For this example, we'll simply prepend the original URL with a base URL
    var baseUrl = "https://example.com/";
    var randomId = Math.random().toString(36).substring(7);
    return baseUrl + randomId;
}