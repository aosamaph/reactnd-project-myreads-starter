import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './book'

class BooksList extends Component {
    render() {
        const { books, shelves, onUpdateBookShelf } = this.props

        return (<div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => (<li key={book.id}>
                    <Book book={book}
                        shelves={shelves}
                        onUpdateBookShelf={onUpdateBookShelf} />
                </li>))}
            </ol>
        </div>
        );
    }
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBookShelf: PropTypes.func,
    shelves: PropTypes.array
}

export default BooksList;