import BookService  from './BookService';
import axios        from '../axiosConfig';
const bookService = new BookService(axios);

export {
    bookService
}