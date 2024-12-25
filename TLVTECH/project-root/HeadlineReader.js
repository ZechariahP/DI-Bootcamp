// Function to fetch and store headlines
async function fetchAndStoreHeadlines() {
    try {
        console.log('Fetching headlines...');
        
        // Fetch the HTML content of the page
        const response = await fetch('https://www.timesofisrael.com');
        const text = await response.text();
        
        console.log('Fetched HTML content.');

        // Parse the HTML content
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // Extract the list items with the specified class id
        const listItems = doc.querySelectorAll('.liveblog-item');

        if (listItems.length === 0) {
            console.warn('No headlines found with the specified class id.');
        }

        // Get the current date and time
        const fetchDate = new Date().toLocaleString();

        // Extract the text content and date from each list item
        const newHeadlines = Array.from(listItems).map(item => {
            const headline = item.querySelector('.liveblog-headline a').textContent.trim();
            const date = item.querySelector('.liveblog-date span').title;
            return { headline, date, fetchDate };
        });

        // Retrieve existing headlines from local storage
        const storedData = JSON.parse(localStorage.getItem('headlinesData')) || [];

        // Append new headlines to the existing data, ensuring uniqueness
        const updatedHeadlines = [...storedData, ...newHeadlines].filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.headline === value.headline
            ))
        );

        // Store the updated headlines in local storage
        localStorage.setItem('headlinesData', JSON.stringify(updatedHeadlines));

        console.log('Headlines stored successfully:', updatedHeadlines);

        // Render the headlines on the page
        renderHeadlines(updatedHeadlines);
    } catch (error) {
        console.error('Error fetching or storing headlines:', error);
    }
}

// Function to render headlines on the page
function renderHeadlines(headlines) {
    const headlinesList = document.getElementById('headlines-list');

    // Clear the existing list
    headlinesList.innerHTML = '';

    // Append new headlines to the existing list
    headlines.forEach(headlineData => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>${headlineData.headline}</div>
            <span>Published on: ${headlineData.date}, Fetched on: ${headlineData.fetchDate}</span>
        `;
        headlinesList.appendChild(listItem);
    });
}

// Load and render headlines from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed.');
    
    const storedData = JSON.parse(localStorage.getItem('headlinesData')) || [];
    renderHeadlines(storedData);

    // Initial call to fetch and store headlines immediately
    fetchAndStoreHeadlines();

    // Set an interval to run the function every hour (3600000 milliseconds)
    setInterval(fetchAndStoreHeadlines, 3600000);
});