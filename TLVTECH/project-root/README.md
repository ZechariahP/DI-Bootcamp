# Headline Reader

This project fetches headlines from the Times of Israel live blog section of the TOI website every hour and stores the text in the local storage so that it can be viewed later.

## How to Run

1. Open `index.html` in a web browser.
2. The script will automatically fetch and store headlines immediately and then every hour.
3. All fetched headlines along with their fetch dates will be displayed on the page without clearing previous ones.

## Files

- `index.html`: The main HTML file that includes the JavaScript and displays the headlines.
- `HeadlineReader.js`: The JavaScript file that contains the logic to fetch, store, and display headlines.
- `styles.css`: The CSS file that contains the styles for the HTML elements.