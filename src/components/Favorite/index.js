import React from 'react';
import Book from '../Book/Book';
import './style.scss';
import {connect} from 'react-redux';
import {deleteFromSave} from '../../redux/books/actions';
import PropTypes from "prop-types";

const Favorite = ({saveBooks, deleteFromSave}) => {
    return (
        <div>
            <div className={'books_list_marked'}>
                {saveBooks.map(book => <Book onDelete={deleteFromSave} key={book.id} {...book} />)}
            </div>
        </div>
    )
};

Favorite.propTypes = {
    deleteFromSave: PropTypes.func.isRequired,
    saveBooks: PropTypes.array
};

export default connect((state) => ({
    saveBooks: state.books.favoritesBooks || []
}), {deleteFromSave})(Favorite)
