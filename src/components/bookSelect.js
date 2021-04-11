import React, { Component } from 'react'
import { camelCaseToText } from '../helpers/helpers';

class BookSelect extends Component {

    render() {
        const { book, options, onSelectChange } = this.props
        if (!options || options.length === 0)
            return (null)
        return (<div className="book-shelf-changer">
            <select
                onChange={(e) => {
                    onSelectChange(e)
                }}>
                <option value="move" disabled>Move to...</option>
                {options.map(o => (
                    <option key={o}
                        value={o}
                        selected={book.shelf === o}
                    >{camelCaseToText(o)}</option>
                ))}
                <option value="none" selected={!book.shelf}>None</option>
            </select>
        </div>
        )
    }
}

export default BookSelect;