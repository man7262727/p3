const express = require('express');
const bodyParser = require('body-parser');

const {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
} = require('./bookModule');

const app = express();

app.use(bodyParser.json());

// GET all books
app.get('/books', (req, res) => {
    const books = getAllBooks();
    res.status(200).json(books);
});

// POST create a new book
app.post('/books', (req, res) => {
    const { title, author, year } = req.body;

    // Input validation
    if (!title || !author || !year) {
        return res.status(400).json({ message: 'title, author, and year are required' });
    }

    const book = createBook(title, author, year);
    res.status(201).json(book);
});

// PUT update a book
app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, year } = req.body;

    // Input validation
    if (!title || !author || !year) {
        return res.status(400).json({ message: 'title, author, and year are required' });
    }

    const updated = updateBook(parseInt(id), title, author, year);

    if (updated) {
        res.status(200).json(updated);
    } else {
        res.status(404).json({ message: "book not found" });
    }
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    const deleted = deleteBook(parseInt(id));

    if (deleted) {
        res.status(200).json(deleted);
    } else {
        res.status(404).json({ message: "book not found" });
    }
});

app.listen(3000, () => {
    console.log("server started on http://localhost:3000");
});
