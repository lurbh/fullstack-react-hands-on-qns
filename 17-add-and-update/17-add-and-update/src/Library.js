import React, {useState} from 'react'

export default function Movies() {

    const [books, setBooks] = useState(
        [
            {
                'id': 101,
                'title': 'Dune',
                'author': 'Frank Herbert',
                'genre': 'science-fiction',
                'tags':['futuristic', 'classics']
            },
            {
                'id': 102,
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'author': 'J.R.R Tolkien',
                'genre':'fantasy',
                'tags':['door-stopper', 'trilogy']
            }
        ]
    )
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [genre,setGenre] = useState("");
    const [tagsList,setTagsList] = useState([]);
    const [index,setIndex] = useState(0);
    const [isEditing, setIsEditing] = useState(false); 

    function getBook(id)
    {
        for(let b of books)
        {
            if(b.id === id)
                return b;
        }
        return null;
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleGenre = (e) => {
        setGenre(e.target.value)
    }

    const handleTags = (e) => {
        const {value, checked} = e.target;
        if(checked)
            if(tagsList.length > 0)
                setTagsList([...tagsList,value])
            else
                setTagsList([value])
        else
        {
            let tagsarray = tagsList.filter((t) => t !== value);
            setTagsList(tagsarray);
        }
    }

    const addBook = () => {
        const newbook= {
            'id': Math.floor(Math.random() * 1000 + 1),
            'title': title,
            'author': author,
            'genre': genre,
            'tags': tagsList
        }
        const newbooks = [...books,newbook];
        setBooks(newbooks);
        setTitle(""); 
        setAuthor(""); 
        setGenre("");
        setTagsList([]);
    }

    const updateBook = () => {
        setIsEditing(false);
        let editedbook = {
            'id': index,
            'title': title,
            'author': author,
            'genre': genre,
            'tags': tagsList
        };

        let indexToEdit = books.findIndex((value) => {
            return value.id === index;
        });

        let clonedBooks = books.slice();

        clonedBooks.splice(indexToEdit,1,editedbook);

        setBooks(clonedBooks);
        

        const header = document.querySelector('#formHeader');
        header.innerHTML = "Add Book";
        const formButton = document.querySelector('#formButton');
        formButton.innerHTML = "Add Book"
        setTitle(""); 
        setAuthor(""); 
        setGenre("");
        setTagsList([])
    }

    const displayEditBook = (e) => {
        setIndex(parseInt(e.target.value));
        const header = document.querySelector('#formHeader');
        header.innerHTML = "Edit Book";
        const formButton = document.querySelector('#formButton');
        formButton.innerHTML = "Edit Book"
        setIsEditing(true);
        const bookToEdit = getBook(parseInt(e.target.value));
        setTitle(bookToEdit.title); 
        setAuthor(bookToEdit.author); 
        setGenre(bookToEdit.genre);
        setTagsList(bookToEdit.tags);
    }

    const cancelEditBook = () => {
        setIsEditing(false);
        const header = document.querySelector('#formHeader');
        header.innerHTML = "Add Book";
        const formButton = document.querySelector('#formButton');
        formButton.innerHTML = "Add Book"
        setTitle(""); 
        setAuthor(""); 
        setGenre("");
        setTagsList([]);

    }

    const displayBooks = () => {
        const fragmentList = [];
        for(let b of books)
        {
            let tagstring = "";
            for(let t of b.tags)
            {
                tagstring = tagstring + t + ", ";
            }
            tagstring = tagstring.slice(0,-2);
            const fragment = (<>
                <div>
                    <h2>Title: {b.title}</h2>
                    <h3>Author: {b.author}</h3>
                    <h4>Genre: {b.genre}</h4>
                    <h5>Tags: {tagstring}</h5>
                    <button onClick={displayEditBook} value={b.id}>Edit</button>
                </div>
            </>)
            fragmentList.push(fragment);
        }
        return fragmentList;
    }

    const handleClick = isEditing ? updateBook : addBook; 

    return <React.Fragment>
        <div class="container">
            <div class="col">
                {displayBooks()}
            </div>

            <div class="col">

            <h3 id="formHeader">Add Book</h3>
            <div>
                <label>Title:</label>
                <input type="text" name="title" id='title' onChange={handleTitle} value={title}/>
            </div>
            <div>
                <label>Author</label>
                <input type="text" name="author" id='author' onChange={handleAuthor} value={author}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="radio" name="genre" id="fantasy" value="fantasy" onChange={handleGenre} checked={genre === "fantasy"}/><label>Fantasy</label>
                <input type="radio" name="genre" id="science-fiction" value="science-fiction" onChange={handleGenre} checked={genre === "science-fiction"}/><label>Science Fiction</label>
                <input type="radio" name="genre" id="romance" value="romance" onChange={handleGenre} checked={genre === "romance"}/><label>Romance</label>
            </div>
            <div>
                <label>Tags</label>
                <input type="checkbox" name="tags" id="classic" value="classic" onChange={handleTags} checked={tagsList.includes("classic")}/><label>Classic</label>
                <input type="checkbox" name="tags" id="doorstopper" value="doorstopper" onChange={handleTags} checked={tagsList.includes("doorstopper")}/><label>Doorstopper</label>
                <input type="checkbox" name="tags" id="futuristic" value="futuristic" onChange={handleTags} checked={tagsList.includes("futuristic")}/><label>futuristic</label>
                <input type="checkbox" name="tags" id="trilogy" value="trilogy" onChange={handleTags} checked={tagsList.includes("trilogy")}/><label>trilogy</label>
            </div>
            <button onClick={handleClick} id="formButton">Add Book</button>
            <button onClick={cancelEditBook}>Cancel</button>
            </div>
        </div>
    </React.Fragment>
}
