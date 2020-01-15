import React, {useRef} from 'react'
import {Input, Button, Icon} from 'antd'
import {connect} from 'react-redux'
import './style.scss'
import {fetchBooks, deleteBook, saveBook, SUCCESS_ALERT} from '../../redux/books/actions'
import Book from '../Book/Book'
import Loader from '../Loader'
import PropTypes from 'prop-types'


const Search = Input.Search;
const SearchInput = ({fetchBooks, books, saveBook, deleteBook, loading}) => {

    const searchInput = useRef(null);

    const handleApply = () => {
        fetchBooks({q: searchInput.current.input.value})
    };

        return (
            <div className={'wrapper-search'}>
                <div className={'search_text'}>Search books:</div>
                <div className='input-box'>
                    <Input placeholder="input search text" ref={searchInput} placeholder="type name of book"/>
                    <Button onClick={handleApply}>
                        <Icon type="search"/>
                    </Button>
                </div>
                <div className={'list_book'}>

                    {books.map(b => <Book onSave={saveBook} onDelete={deleteBook}
                                          key={b.id} {...b} />)}
                </div>
                {loading ?
                    <Loader/> :
                    null
                }
            </div>
        )
    };


SearchInput.propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    deleteBook: PropTypes.func,
    saveBook: PropTypes.func,
    fetchBooks: PropTypes.func
};

export default connect(
    (state => ({
        books: state.books.booksList,
        loading: state.books.loading,
        alertMessage: state.books.alertMessage
    })),
    {fetchBooks, deleteBook, saveBook}
)(SearchInput)