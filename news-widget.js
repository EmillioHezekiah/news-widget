var xhr = new XMLHttpRequest();
var apiKey = '4cb83b0a2b150aed840589f6fe6a1ec2';
var apiUrl = 'https://www.tradepr.work/articles/?apiKey=' + apiKey;

xhr.open('GET', apiUrl, true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            try {
                console.log('Raw response:', xhr.responseText);  // Log the raw response
                var response = JSON.parse(xhr.responseText);
                // Process the response and display the news
                displayNews(response);
            } catch (e) {
                console.error('Error parsing JSON response:', e);
            }
        } else {
            console.error('Error fetching data:', xhr.status, xhr.statusText);
        }
    }
};

xhr.send();

function displayNews(newsData) {
    var container = document.getElementById('news-container');
    container.innerHTML = '';  // Clear any existing content

    newsData.articles.forEach(function(article) {
        var articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = '<h2>' + article.title + '</h2><p>' + article.description + '</p>';
        container.appendChild(articleElement);
    });
}
