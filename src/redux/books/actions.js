import {get} from '../../api'
import localStorage from '../helper'
import {message} from 'antd';

const prefix = '@books'


export const FETCH_START = `${prefix}/FETCH_START`;
export const FETCH_SUCCESS = `${prefix}/FETCH_SUCCESS`;
export const FETCH_FAILURE = `${prefix}/FETCH_FAILURE`;
export const DELETE_BOOK = `${prefix}/DELETE_BOOK`;

export const deleteBook = (id) => ({
    type: DELETE_BOOK,
    payload: id
});

export const saveBook = id => (dispatch, getState) => {
    const book = getState().books.booksList.find(book => book.id === id);
    const allBooks = localStorage.get('books') || [];
    allBooks.push(book);
    localStorage.set('books', allBooks);
    dispatch(receiveFavBooks(allBooks));
};

export const deleteFromSave = (id) => (dispatch, getState) => {
    const books = getState().books.favoritesBooks.filter(book => book.id !== id);
    localStorage.set('books', books);
    dispatch(receiveFavBooks(localStorage.get('books')));
    message.info('Your book was deleted from Favorite');
};

export const fetchBooks = ({q = ''}) => (dispatch) => {
    dispatch({
        type: FETCH_START
    });

    get('books/v1/volumes', {q}).then(data => {
        dispatch({type: FETCH_SUCCESS, payload: data.data.items})
    }).catch(err => {
        dispatch({type: FETCH_FAILURE});
    })
};

export const RECEIVE_FAVORITES = `${prefix}/RECEIVE_FAVORITES`;

export const receiveFavBooks = books => ({
    type: RECEIVE_FAVORITES,
    payload: books
});
