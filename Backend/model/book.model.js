import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

const BookModel = mongoose.model("book_app", bookSchema);

export default BookModel;