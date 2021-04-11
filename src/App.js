import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './pages/search'
import Home from './pages/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getAll, update } from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: []
  }

  updateBookShelf = (book, newShelf) => {

    update(book, newShelf).then((res) => {
      this.setState((prevState) => {
        book.shelf = newShelf
        let bb = prevState.books.find(b => b.id === book.id)
        if (bb) {
          bb.shelf = newShelf
          return {
            books: prevState.books
          }
        }
        return {
          books: prevState.books.concat(book)
        }
      })
    })
  }

  componentDidMount() {
    getAll().then(
      (res) => {
        this.setState((currentState) => {
          return {
            books: res,
            shelves: Array.from(new Set(res.filter(b => b.shelf)
              .map(b => b.shelf)))
          }
        })
      }
    )
  }

  render() {
    const { books, shelves } = this.state

    return (
      <BrowserRouter>
        <Switch>
          {/* <div className="app"> */}
          <Route path='/search'
            render={(props) => (
              <Search {...props}
                shelves={shelves}
                myBooks={books}
                onUpdateBookShelf={this.updateBookShelf} />
            )} />
          <Route path='/' exact
            render={(props) => (
              <Home {...props}
                books={books}
                shelves={shelves}
                onUpdateBookShelf={this.updateBookShelf} />
            )} />
          {/* </div> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default BooksApp
