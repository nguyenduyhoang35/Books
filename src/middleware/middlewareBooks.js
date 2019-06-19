import {bookService} from "../services";

export const middlewareBooks = () =>  {
    return bookService.then(result => {
        return {
            result
        }
    })
};