class BookService {
    constructor(axios) {
        this.axios = axios;
    }

    getBooks() {
        return this.axios.get(`/books`).then(res => res.data);
    }

    getDetail(id) {
        return this.axios.get(`/book/${id}`).then(res => res.data)
    }

    creatBooks(book) {
        return this.axios.post(`/books`, book).then(res => res.data)
    }

    editBooks(id, book) {
        return this.axios.put(`/books/${id}`, book).then(res => res.data)
    }

    filterBooks(params) {
        return this.axios.get(`/books`, {params: params}).then(res => res.data)
    }
}

export default BookService;