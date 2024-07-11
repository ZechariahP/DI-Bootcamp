//1. Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
//2. In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
//3. In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
//4. The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
//5. Allow the user to delete a specific gif by clicking the DELETE button.
//6. Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

// Get the form element from the HTML
const form = document.querySelector('form');

// Get the search input element from the HTML
const searchInput = document.querySelector('input');

// Get the search button element from the HTML
const searchButton = document.querySelector('button[type="submit"]');

// Add event listener to the form submit event
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the user input value
    const searchInputValue = searchInput.value;

    // Fetch a random gif based on the user's search
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${searchInputValue}`)
        .then(response => response.json())
        .then(data => {
            // Get the gif URL from the response data
            const gifUrl = data.data.images.original.url;

            // Create a new gif element
            const gifElement = document.createElement('img');
            gifElement.src = gifUrl;

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'DELETE';

            // Add event listener to the delete button
            deleteButton.addEventListener('click', () => {
                // Remove the gif element and delete button from the page
                gifElement.remove();
                deleteButton.remove();

                // Check if there are any remaining gif elements
                const remainingGifElements = document.querySelectorAll('img');
                if (remainingGifElements.length === 0) {
                    // Hide the delete all button if there are no remaining gif elements
                    deleteAllButton.style.display = 'none';
                }
            });

            // Append the gif element and delete button to the page
            document.body.appendChild(gifElement);
            document.body.appendChild(deleteButton);

            // Show the delete all button if there is more than one gif element
            const gifElements = document.querySelectorAll('img');
            if (gifElements.length > 1) {
                deleteAllButton.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Create a delete all button
const deleteAllButton = document.createElement('button');
deleteAllButton.textContent = 'DELETE ALL';

// Add event listener to the delete all button
deleteAllButton.addEventListener('click', () => {
    // Remove all gif elements and delete buttons from the page
    const gifElements = document.querySelectorAll('img');
    gifElements.forEach(gifElement => gifElement.remove());
    const deleteButtons = document.querySelectorAll('button');
    deleteButtons.forEach(deleteButton => {
        if (deleteButton !== deleteAllButton && deleteButton !== searchButton) {
            deleteButton.remove();
        }
    });

    // Hide the delete all button
    deleteAllButton.style.display = 'none';
});

// Append the delete all button to the page
document.body.appendChild(deleteAllButton);

// Hide the delete all button initially
deleteAllButton.style.display = 'none';
