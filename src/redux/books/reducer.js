import { combineReducers } from 'redux'

import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS, DELETE_BOOK, RECEIVE_FAVORITES } from './actions'




export default combineReducers({
    loading(state = false, { type }) {
        switch(type) {
            case FETCH_START: return true;
            case FETCH_SUCCESS: return false;
            case FETCH_FAILURE: return false;
            default: return state
        }
    },
    booksList(state = [], { type, payload }) {
        switch(type) {
            case FETCH_SUCCESS: return payload
            case DELETE_BOOK: return state.filter((book) => book.id !== payload)
            default: return state
        }
    },
    favoritesBooks(state = [], { type, payload }) {
        switch(type) {
            case RECEIVE_FAVORITES: return payload
            default: return state
        }
    },
})