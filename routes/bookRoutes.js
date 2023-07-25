// routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const db = require('../models/db_connection');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await db.books.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new book
router.post('/', async (req, res) => {
  const { title, author, genre, publishedYear } = req.body;
  try {
    const newBook = await db.books.create({
      title,
      author,
      genre,
      publishedYear,
    });
    res.status(200).json(newBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  const bookId = req.params.id;
  const { title, author, genre, publishedYear } = req.body;

  try {
    // Update the book in the database
    const [rowsUpdated, [updatedBook]] = await db.books.update(
      {
        title,
        author,
        genre,
        publishedYear,
      },
      { returning: true, where: { id: bookId } }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Delete a book
router.delete('/:id', async (req, res) => {
  const bookId = req.params.id;

  try {
    await db.books.destroy({ where: { id: bookId } });
    res.json({ message: 'Book deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Add multiple books
router.post('/multiple', async (req, res) => {
    const booksToAdd = req.body;
    // console.log(booksToAdd);
  
    try {
      const newBooks = await db.books.bulkCreate(booksToAdd);
      res.json(newBooks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;
