import React, {Component} from 'react';
import {bookService} from "../services";

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    async componentWillMount() {
        let books = await bookService.getDetail(this.props.match.params.id);
        this.setState({
            books: books
        })
    }

    render() {
        let {books} = this.state;
        return (
            <div className='default-background-color'>
                <div className='padding-responsive'>
                    {books ? books.map(book => (
                    <div className='card card-kiroku-web mb-3' key={book.id}>
                        <div className="p-2">
                            <div className="d-flex">
                                <div className='mr-5'>
                                    <img className='baner'
                                         src="https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.aspx"
                                         alt="dragon"/>
                                </div>
                                <div className=''>
                                    <h2 className="info_title" title={book.title}>{book.title}</h2>
                                    <p>Tác giả: {book['author']}</p>
                                    <p>Nhà Xuất Bản: {book['publisher'].name}</p>
                                    <p>Giá Tiền: {book['price']} $</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                    ) : ''}
                </div>
            </div>
        );
    }
}

export default Detail;