var xhr = new XMLHttpRequest();
var apiKey = '4cb83b0a2b150aed840589f6fe6a1ec2';
var apiUrl = 'https://www.tradepr.work/articles/?apiKey=' + apiKey;

xhr.open('GET', apiUrl, true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('Raw response:', xhr.responseText);  // Log the raw response
            if (xhr.responseText.trim()) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    displayNews(response);
                } catch (e) {
                    console.error('Error parsing JSON response:', e);
                }
            } else {
                console.error('Empty response received.');
            }
        } else {
            console.error('Error fetching the news:', xhr.status, xhr.statusText);
        }
    }
};

xhr.send();

function displayNews(newsData) {
    // Implement your logic to display the news data on the webpage
    console.log('News Data:', newsData);
}
