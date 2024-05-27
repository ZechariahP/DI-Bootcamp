//<div>Users:</div>
//<ul>
    //<li>John</li>
    //<li>Pete</li>
//</ul>
//1. Add the code above, to your HTML file

//2. Using Javascript:
	//1. Add a “light blue” background color and some padding to the <div>.
	const root = document.firstElementChild;
	const body = root.lastElementChild;
	const div = body.firstElementChild;
	div.style.backgroundColor = "lightBlue";
	div.style.padding = "2px";
	//2. Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
	const ul = body.children[1];
	let li = ul.firstElementChild;
	li.style.display = "none";
	li = ul.lastElementChild;
	//3. Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
	li.style.border = "2px solid black";
	//4. Change the font size of the whole body.
	body.style.fontSize = "20px";
//3. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (div.style.backgroundColor = "lightBlue") {
	const x = ul.firstElementChild.innerHTML;
	const y = ul.lastElementChild.innerHTML;
	alert("Hello " + x + " and " + y);
}