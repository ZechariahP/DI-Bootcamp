//Exercise 1: Users
//1. Add the code above, to your HTML file
//2. Using Javascript:
    //1. Retrieve the div and console.log it
    const root = document.firstElementChild;
    const body = root.lastElementChild;
    div = body.firstElementChild;
    console.log(div);
    //2. Change the name “Pete” to “Richard”.
    ul = body.children[1];
    li = ul.children[1];
    ul.children[1].innerHTML = "Richard";
    //3. Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
    ul = body.children[2];
    li = ul.children[1];
    console.log(ul.removeChild(li));
    //4. Change each first name of the two <ul>'s to your name. (Hint : use a loop)
    document.querySelectorAll(".list")[0].firstElementChild;
    const lists = document.querySelectorAll(".list");
    lists.forEach(list => list.firstElementChild.textContent = "Zachary");
//3. Bonus - Using Javascript:
    //1. Add a class called student_list to both of the <ul>'s.
    lists.forEach(list => list.classList.add("student_list"))
    //2. Add the classes university and attendance to the first <ul>.
    lists[0].classList.add("university", "attendance");