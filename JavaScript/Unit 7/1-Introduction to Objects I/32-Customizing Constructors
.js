/*
In addition to the basic Object constructor, we can define our own custom
constructors. These are helpful for two reasons:

We can assign our objects properties through parameters we pass in when
the object is created.

We can give our objects methods automatically.
These both work to save us time and lines of code when we make objects.
*/
//CODE
// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320,"J.R.R. Tolkien");
