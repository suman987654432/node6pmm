const AuthorModel= require("../models/authorModel");
const BookModel= require("../models/bookModel");
const userSave=async(req, res)=>{
 const  { authorname, booktitle, bookprice}= req.body;
    
 try {
        const Author= await AuthorModel.create({
                authorname:authorname
            })

       

        const Book= await BookModel.create({
            booktitle:booktitle ,
            bookprice:bookprice,
            authorid:Author._id

        })    
       
       
         await AuthorModel.findByIdAndUpdate(Author._id, { $push: { books: Book._id } });

            res.send("OK");

    } catch (error) {
         console.log(error);
    }
}


const userDisplay=async(req, res)=>{

    const Data= await AuthorModel.find().populate("books");
    res.send(Data);

}


const addMoreBook=async(req, res)=>{
 const    { id, booktitle, bookprice} = req.body;
     const Book= await BookModel.create({
        booktitle:booktitle,
        bookprice:bookprice,
        authorid:id

     }) 
     await AuthorModel.findByIdAndUpdate(id, { $push: { books: Book._id } });
     res.send("OK");
}


module.exports={
    userSave,
    userDisplay,
    addMoreBook
}