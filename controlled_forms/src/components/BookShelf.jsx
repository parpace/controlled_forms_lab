import { useState } from 'react'

const BookShelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ])
    
    const [newBook, setNewBook] = useState({ 
        title: '', 
        author: '' 
    })
    
    const handleInputChange = (event) => {
        // Learned that you can either call a setter function with a new state value, or a function. I decided to try setting it with a function. React automatically passes the current state value to the function, and here I call it "currentState". The function then returns the new state by creating a new object that copies the previous state and updates the name and value.
        const { name, value } = event.target
        setNewBook((currentState) => ({ ...currentState, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // I need to capture the current state of newBook and add it to the current state of the books array via setBooks
        setBooks((currentState) => [...currentState, newBook])
        setNewBook({ title: '', author: '' })
    }

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newBook.title}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={newBook.author}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookShelf