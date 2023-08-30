const Book =require('../models/postSchema')



const getBook = async (req, res) => {
    try {
        const bookId = req.params.id; // Assuming you'll pass the book's ID as a parameter
        const book = await Book.findById(bookId);
        
        if (!book) {
            res.status(404).json({ msg: "Book not found" });
        } else {
            res.status(200).json({ msg: "Book retrieved", book });
        }
    } catch (error) {
        console.error("Error during book retrieval:", error);
        res.status(500).json({ msg: "Something went wrong", err: error });
    }
}

const allposts=async(req,res)=>{
    try{
        const posts=await Book.find().populate(req.body.id)
        res.status(200).json({msg:"Get all posts",posts:posts})
    }
    catch(error){
        res.status(500).json({msg:"Something went wrong"})
    }
}



module.exports = { getBook,allposts };