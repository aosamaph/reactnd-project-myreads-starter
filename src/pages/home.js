import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/header';
import ShelvesList from '../components/shelvesList';

class Home extends Component {
    render() {
        const { books, shelves, onUpdateBookShelf } = this.props

        return (<div className="list-books">
            <Header headerText="My Reads" />
            <ShelvesList books={books}
                shelves={shelves}
                onUpdateBookShelf={onUpdateBookShelf} />
            <div className="open-search">
                <Link to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>);
    }
}

export default Home;