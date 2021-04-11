import React, { Component } from 'react'
import { camelCaseToText } from '../helpers/helpers';
import Shelf from './shelf';

class ShelvesList extends Component {

    render() {
        const { shelves, books, onUpdateBookShelf } = this.props
        return (
            <div className="list-books-content">
                {shelves.map(s => (
                    <Shelf key={s}
                        title={camelCaseToText(s)}
                        books={books.filter(b => b.shelf === s)}
                        shelves={shelves}
                        onUpdateBookShelf={onUpdateBookShelf}
                    />
                ))}
            </div>
        );
    }
}

export default ShelvesList;