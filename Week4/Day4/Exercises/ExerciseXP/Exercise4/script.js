//The point of this challenge is to display a list of two books on your browser.
//1. In the body of the HTML page, create an empty div:
//<div class="listBooks"></div>
//2. In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
	//title,
	//author,
	//image : a url,
	//alreadyRead : which is a boolean (true or false).
const allBooks = [];

const book1 = {
	title: "The Dark Tower",
	author: "Steven King",
	image: "https://stephenking.com/images/books/dark_tower/hardcover_prop_embed.jpg",
	alreadyRead: true,
}

const book2 = {
	title: "Lord of the Rings",
	author: "J.R.R. Tolkien",
	image: "https://m.media-amazon.com/images/I/412JSB73D2L._SY425_.jpg",
	alreadyRead: false,
}


//3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
allBooks.push(book1, book2);
console.log('allBooks:', allBooks);
//4. Requirements : All the instructions below need to be coded in the js file:
	//1. Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
	//For each book :
	//You have to display the book’s title and the book’s author.
	//Example: HarryPotter written by JKRolling.
	//The width of the image has to be set to 100px.
	//If the book is already read. Set the color of the book’s details to red.
const table = document.createElement("table");
table.innerHTML = `
<thead>
	<tr>
		<th colspan="3">My Book List</th>
	</tr>
</thead>
<tbody>
	<tr style="${book1.alreadyRead ? 'color:red;' : ''}">
		<td>${book1.title} written by ${book1.author}</td>
		<td>
			<img src="${book1.image}" style="width: 100px"/>
		</td>
		<td>Already read: ${book1.alreadyRead}</td>
	</tr>
	<tr class="${book2.alreadyRead ? 'red' : ''}">
		<td>${book2.title} written by ${book2.author}</td>
		<td>
			<img src="${book2.image}" style="width: 100px"/>
		</td>
		<td>Already read: ${book2.alreadyRead}</td>
	</tr>
</tbody>
`
const bookListDiv = document.querySelector(".list-books")
bookListDiv?.appendChild(table);