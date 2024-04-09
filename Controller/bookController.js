
const books = require('../Model/bookModel');


// add book
exports.addBook = async (req, res) => {

    const { id, bookName, author, price, coverImg } = req.body;

    try {

        const existingBook = await books.findOne({ bookName })
        if (existingBook) {
            res.status(401).json(`${bookName} already exist`);
        }
        else {
            console.log(id, bookName, author, price, coverImg);
            const newBook = new books({
                id, bookName, author, price, coverImg
            });
            await newBook.save();
            res.status(200).json("Book added succesfully");
        }

    } catch (error) {
        res.status(401).json(error);
    }

}


// getAll book
exports.getAllBooks = async (req, res) => {

    try {
        const allBooks = await books.find();
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(401).json(error);
    }

}


// delete book
exports.deleteBook = async (req, res) => {

    const {id} = req.params;

    try {
        const deleteBook = await books.findByIdAndDelete({_id:id});
        res.status(200).json("Book deleted successfully.");
    } catch (error) {
        res.status(401).json("Something went wrong, unable to delete.");
    }

}