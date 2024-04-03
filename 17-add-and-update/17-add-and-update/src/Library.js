import React, {useState} from 'react'

export default function Movies() {

    const [books, setBooks] = useState(
        [
            {
                'id': 101,
                'title': 'Dune',
                'author': 'Frank Herbert',
                'genre': 'science-fiction',
                'tags':['futuristic', 'classic']
            },
            {
                'id': 102,
                'title': 'The Lord of the Rings: The Fellowship of the Ring',
                'author': 'J.R.R Tolkien',
                'genre':'fantasy',
                'tags':['doorstopper', 'trilogy']
            }
        ]
    )
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [genre,setGenre] = useState("");
    const [tagsList,setTagsList] = useState([]);
    const [index,setIndex] = useState(0);
    const [isEditing, setIsEditing] = useState(false); 

    const handleInput = (e) => {
        const {value, name} = e.target;
        if(name === 'title')
            setTitle(value);
        else if(name === 'author')
            setAuthor(value);
        else if(name === 'genre')
            setGenre(value);
        else if(name === 'tags')
        {
            const {checked} = e.target;
            if(checked)
                if(tagsList.length > 0)
                    setTagsList([...tagsList,value]);
                else
                    setTagsList([value]);
            else
            {
                let tagsarray = tagsList.filter((t) => t !== value);
                setTagsList(tagsarray);
            }
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

        setTitle(""); 
        setAuthor(""); 
        setGenre("");
        setTagsList([]);
    }

    const displayEditBook = (id) => {
        setIndex(parseInt(id));
        setIsEditing(true);
        const bookToEdit = books.find((value) => {
            return value.id === id;
        });

        setTitle(bookToEdit.title); 
        setAuthor(bookToEdit.author); 
        setGenre(bookToEdit.genre);
        setTagsList(bookToEdit.tags);
    }

    const cancelEditBook = () => {
        setIsEditing(false);
        setTitle(""); 
        setAuthor(""); 
        setGenre("");
        setTagsList([]);
    }

    const DeleteBook = (id) => {
        const indexToRemove = books.findIndex((value) => {
            return value.id === index;
        }); 
        const clonedBooks = books.slice();
        clonedBooks.splice(indexToRemove,1);
        setBooks(clonedBooks);
    }

    const displayBooks = () => {
        const fragmentList = [];
        for(let b of books)
        {
            const fragment = (<>
                <div>
                    <h2>Title: {b.title}</h2>
                    <h3>Author: {b.author}</h3>
                    <h4>Genre: {b.genre}</h4>
                    <h5>Tags: {b.tags.join(", ")}</h5>
                    <button onClick={() => displayEditBook(b.id)} value={b.id}>Edit</button>
                    <button onClick={() => DeleteBook(b.id)} value={b.id}>Delete</button>
                </div>
            </>)
            fragmentList.push(fragment);
        }
        return fragmentList;
    }

    return <React.Fragment>
        <div className="container">
            <div className="col">
                {displayBooks()}
            </div>

            <div className="col">

            <h3>{isEditing ? "Edit Book" : "Add Book"}</h3>
            <div>
                <label>Title:</label>
                <input type="text" name="title" id='title' onChange={handleInput} value={title}/>
            </div>
            <div>
                <label>Author</label>
                <input type="text" name="author" id='author' onChange={handleInput} value={author}/>
            </div>
            <div>
                <label>Genre</label>
                <input type="radio" name="genre" id="fantasy" value="fantasy" onChange={handleInput} checked={genre === "fantasy"}/><label>Fantasy</label>
                <input type="radio" name="genre" id="science-fiction" value="science-fiction" onChange={handleInput} checked={genre === "science-fiction"}/><label>Science Fiction</label>
                <input type="radio" name="genre" id="romance" value="romance" onChange={handleInput} checked={genre === "romance"}/><label>Romance</label>
            </div>
            <div>
                <label>Tags</label>
                <input type="checkbox" name="tags" id="classic" value="classic" onChange={handleInput} checked={tagsList.includes("classic")}/><label>Classic</label>
                <input type="checkbox" name="tags" id="doorstopper" value="doorstopper" onChange={handleInput} checked={tagsList.includes("doorstopper")}/><label>Doorstopper</label>
                <input type="checkbox" name="tags" id="futuristic" value="futuristic" onChange={handleInput} checked={tagsList.includes("futuristic")}/><label>futuristic</label>
                <input type="checkbox" name="tags" id="trilogy" value="trilogy" onChange={handleInput} checked={tagsList.includes("trilogy")}/><label>trilogy</label>
            </div>
            <button onClick={isEditing ? updateBook : addBook} id="formButton">{isEditing ? "Update Book" : "Add Book"}</button>
            <button onClick={cancelEditBook}>Cancel</button>
            </div>
        </div>
    </React.Fragment>
}
