let books = [];

// Get all books
const getAllBooks = () => {
    return books;
};

// Get book by ID
const getBookById = (id) => {
    return books.find(book => book.id === id);
};

// Create a new book
const createBook = (title, author, year) => {
    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        year: year
    };
    books.push(newBook);
    return newBook;
};

// Update a book
const updateBook = (id, newTitle, newAuthor, newYear) => {
    const book = books.find(book => book.id === id);
    if (book) {
        book.title = newTitle;
        book.author = newAuthor;
        book.year = newYear;
        return book;
    }
    return null;
};

// Delete a book
const deleteBook = (id) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        return deletedBook[0];
    }
    return null;
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
