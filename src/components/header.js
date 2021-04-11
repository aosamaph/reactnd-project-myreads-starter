import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
    render() {
        const { headerText } = this.props

        return (<div className="list-books-title">
            <h1>{headerText}</h1>
        </div>);
    }
}

Header.propTypes = {
    headerText: PropTypes.string.isRequired
}

export default Header;
