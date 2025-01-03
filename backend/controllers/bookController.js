const BookModel= require("../models/booksModel");


const bookSave=async(req, res)=>{
   const {authorname, booktitle, publishdate, bookprice} = req.body ;
   const Book= await BookModel.create({
    author_name:authorname,
    book_title:booktitle,
    publish_year:publishdate,
    price:bookprice
   })
    res.send("Book created");
}

const bookDisplay=async(req, res)=>{
      const Book = await BookModel.find();
      res.send(Book);
}

module.exports={
    bookSave,
    bookDisplay
}