
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {

        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    
    };

}



function addBookToLibrary(book) {
    myLibrary.push(book);
    
}

function readClick(e) {
    console.log(e.path[2].id);
    const title = e.path[2].id;
    const t = e.path[0].innerHTML;
    let b;

    if (t == "Have Read") {
        e.path[0].innerHTML = 'Have Not Read';
        b = 'Have Not Read'
    }   else {
        e.path[0].innerHTML = 'Have Read';
        b = 'Have Read'
    }

    for (bks in myLibrary) {
        
        if (myLibrary[bks].title == title) {
            myLibrary[bks].read = b;
            
        }
    }

}

function deleteClick(e) {
    
    const title = e.path[2].id;
    for (bks in myLibrary) {
        
        if (myLibrary[bks].title == title) {
            console.log(myLibrary[bks].title)
            myLibrary.splice(bks,1);
            
        }
    }
    displayLibrary();

}

function displayLibrary() {
    const library = document.getElementById('library');
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }
    for (m in myLibrary) {
        console.log(myLibrary[m].title);
        const div = document.createElement('div');
       // div.textContent = myLibrary[m].title;
        div.className = 'card';
        div.id = myLibrary[m].title;
        library.appendChild(div);
        const cardwrapper = document.createElement('div');
        cardwrapper.className = 'card-wrapper';
        const card = document.getElementById(myLibrary[m].title);
        const title = document.createElement('h1');
        title.textContent = myLibrary[m].title;
        const author = document.createElement('h2');
        author.textContent = myLibrary[m].author;
        const pages = document.createElement('h3');
        pages.textContent = myLibrary[m].pages;
        const read = document.createElement('h4');
        read.textContent = myLibrary[m].read;
        read.addEventListener("click", readClick, false);
        const dlt = document.createElement('h5');
        dlt.textContent = 'Delete';
        dlt.addEventListener('click', deleteClick, false);
        cardwrapper.appendChild(title);
        cardwrapper.appendChild(author);
        cardwrapper.appendChild(pages);
        cardwrapper.appendChild(read);
        cardwrapper.appendChild(dlt);
        card.appendChild(cardwrapper);
    }

}

function addBookInputs(item) {
    const titleDiv = document.createElement('div');
    titleDiv.className = 'input-div';
    const titleInput = document.createElement('input')
    titleInput.name = item;
    titleInput.type = 'text';
    titleInput.id = item;
    titleInput.required = true;
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = item;
    titleLabel.textContent = item;
    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);
    return titleDiv;

}


function onSubmission(e) {
    e.preventDefault();
    console.log('submitted');
    const t = document.getElementById('title');
    const a = document.getElementById('author');
    const p = document.getElementById('pages');
    const r = document.getElementById('read');

    const newBook = new Book(t.value, a.value, p.value, r.value)
    addBookToLibrary(newBook);
    displayLibrary();
    const formWrapper = document.getElementById('form-section');
    while (formWrapper.firstChild) {
        formWrapper.removeChild(formWrapper.firstChild);
    }
}

function addButtonFunction() {
    const formWrapper = document.getElementById('form-section');
    const form = document.createElement('form');
    const btn = document.createElement('input');
    btn.className = 'add-btn';
    btn.type = 'submit';
    btn.id = 'submit-btn';
    btn.addEventListener("click", onSubmission, false);

    let e = addBookInputs('title');
    form.appendChild(e);
    let a = addBookInputs('author');
    form.appendChild(a);
    let p = addBookInputs('pages');
    form.appendChild(p);
    let r = addBookInputs('read');
    form.appendChild(r);
    form.appendChild(btn);
    formWrapper.appendChild(form);
}




const Dune = new Book('Dune', 'Frank Herbert', '478', 'Have Read');
addBookToLibrary(Dune);
const Neuromancer = new Book('Neuromancer', 'William Gibson', '242', 'Have Read');
addBookToLibrary(Neuromancer);

displayLibrary();

const addButton = document.getElementById('btn-1');
