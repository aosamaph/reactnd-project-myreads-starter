import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookSelect from './bookSelect'

class Book extends Component {
    render() {
        const { book, shelves, onUpdateBookShelf } = this.props

        return (<div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")` }}></div>
                {shelves && shelves.length > 0 &&
                    <BookSelect book={book}
                        options={shelves}
                        onSelectChange={(e) => {
                            onUpdateBookShelf(book, e.target.value)
                        }} />
                }
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
                <ul>
                    {book.authors &&
                        book.authors.map(author => (
                            <li key={author}>{author}</li>))
                    }
                </ul>
            </div>
        </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.object,
    onUpdateBookShelf: PropTypes.func,
    shelves: PropTypes.array
}
export default Book;