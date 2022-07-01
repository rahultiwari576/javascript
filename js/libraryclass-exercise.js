console.log("Library Class - Exercise");

//  ----------------------------- INCOMPLETE ----------------------------------

class Library {
    // We have an set of array in bookList which we received from new Library object function
    constructor(bookList) {
        this.listBook = bookList;
        this.issuedBook = {};
    }

    getBookList() {
        // !Important! - Check 2-loops.html file for more clarification on using forEach loop for iteration of objects

        // Iterating the set of array which is stored in this.listBook using forEach loop
        /*
        It will iterate the array one by one like this in console
        harry
        harsh
        tom
        */
        this.listBook.forEach(function (element,index,array) {
            console.log(element,index,array);
        });
    }

    issueBook(bookname, user) {
        this.issuedBook[bookname] = user;
        console.log(this.issuedBook[bookname]);
        console.log(user);
    }

    returnBook() {
        delete this.issuedBook[bookname];
    }
}

// For getBookList Method

// here we are passing the arugument to the Library constructor in the form of array
let array = ['harsh', 'harry', 'tom']
harryLib = new Library(array);
// here we are calling the getBookList method
harryLib.getBookList();

// For IssueBook method
harryLib.issueBook('Harry Potter', 'Harsh')

