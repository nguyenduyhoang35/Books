class BookService {
    constructor(axios) {
        this.axios = axios;
    }

    books() {
        return this.axios.get(`/books`).then(res => res.data);
    }
}

export default BookService;