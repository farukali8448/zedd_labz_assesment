//Example for populate on a array field (where show ref id in a array)


const mongoose = require('mongoose');

// Define the schema for the referenced documents
const authorSchema = new mongoose.Schema({
  name: String,
});

const bookSchema = new mongoose.Schema({
  title: String,
  authors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author',
  }],
});

// Create the models
const Author = mongoose.model('author', authorSchema);
const Book = mongoose.model('Book', bookSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create sample authors
const author1 = new Author({ name: 'Author 1' });
const author2 = new Author({ name: 'Author 2' });
const author3 = new Author({ name: 'Author 3' });

// Save the authors to the database
Promise.all([author1.save(), author2.save(), author3.save()])
  .then(() => {
    // Create a sample book with author references
    const book = new Book({
      title: 'Book 1',
      authors: [author1._id, author2._id, author3._id],
    });

    // Save the book to the database
    return book.save();
  })
  .then(() => {
    // Query the book and populate the authors field
    return Book.findOne({ title: 'Book 1' }).populate('authors');
  })
  .then((book) => {
    // Log the populated book with author details
    console.log(book);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  })
  .finally(() => {
    // Close the MongoDB connection
    mongoose.disconnect();
  });
