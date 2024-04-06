
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