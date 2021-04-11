import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI'
import Book from '../components/book'

class Search extends Component {
    state = {
        books: [],
        query: ''
    }

    // Try debounce
    handleChange = (e) => {
        this.setState({ query: e.target.value })
        if (e.target.value === '') {
            this.setState({ books: [] })
            return
        }
        const { myBooks } = this.props
        let userBooks = {}
        myBooks.forEach(b => { userBooks[b.id] = b })

        search(e.target.value)
            .then((res) => {
                if (res.error) {
                    this.setState({ books: [] })
                    return
                }
                res.forEach(b => {
                    if (userBooks[b.id])
                        b.shelf = userBooks[b.id].shelf
                })
                this.setState({
                    books: res,
                    shelves: Array.from(new Set(res.filter(b => b.shelf)
                        .map(b => b.shelf)))
                })
            })
    }

    render() {
        const { books, query } = this.state
        const { shelves, onUpdateBookShelf } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by Title or Author"
                            onChange={(e) => { this.handleChange(e) }}
                            value={query} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.id}>
                                <Book book={book}
                                    shelves={shelves}
                                    onUpdateBookShelf={onUpdateBookShelf} />
                            </li>))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search