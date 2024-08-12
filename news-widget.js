(function() {
    var newsWidget = {
        baseUrl: 'https://www.tradepr.work/api/news?key=4cb83b0a2b150aed840589f6fe6a1ec2',
        fetchNews: function() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', this.baseUrl, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var newsData = JSON.parse(xhr.responseText);
                    newsWidget.displayNews(newsData);
                }
            };
            xhr.send();
        },
        displayNews: function(newsData) {
            var newsContainer = document.getElementById('news-widget-container');
            if (newsContainer) {
                var newsHtml = '';
                newsData.forEach(function(newsItem) {
                    newsHtml += '<div class="news-item">';
                    newsHtml += '<h2>' + newsItem.title + '</h2>';
                    newsHtml += '<p>' + newsItem.content + '</p>';
                    newsHtml += '</div>';
                });
                newsContainer.innerHTML = newsHtml;
            }
        }
    };

    document.addEventListener('DOMContentLoaded', function() {
        newsWidget.fetchNews();
    });
})();
