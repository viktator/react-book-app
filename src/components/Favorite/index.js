
import React from 'react'
import Book from '../Book/Book'
import './style.scss'
import { connect } from 'react-redux'
import {deleteFromSave} from '../../redux/books/actions'
import PropTypes from "prop-types";




class Favorite extends React.Component {

   
    render() {
         
        return (
            <div>

            <div className={'books_list_marked'}>
            {this.props.saveBooks.map(book => <Book onDelete={this.props.deleteFromSave}  key={book.id} {...book} />)}
            </div>
            </div>
        )
    }
}

Favorite.propTypes = {
    deleteFromSave: PropTypes.func.isRequired,
    saveBooks: PropTypes.array

};

export default connect((state ) => ({
    saveBooks: state.books.favoritesBooks || []
}), { deleteFromSave})(Favorite)
