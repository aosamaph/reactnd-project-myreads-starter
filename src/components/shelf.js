import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksList from './booksList';

class Shelf extends Component {

    render() {
        const { title, books, shelves, onUpdateBookShelf } = this.props;
        return (<div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            {books && books.length > 0 ?
                <BooksList onUpdateBookShelf={onUpdateBookShelf}
                    books={books}
                    shelves={shelves} />
                :
                <div>No books to show</div>
            }
        </div>
        );
    }
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array,
    onUpdateBookShelf: PropTypes.func,
    shelves: PropTypes.array
}

export default Shelf;