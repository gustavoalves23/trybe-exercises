import { bookModel } from "./models";

bookModel.find({}).then(books => {
    console.log(books);
})