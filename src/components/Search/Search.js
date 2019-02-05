import React from 'react'
import { Input, Button, Icon } from 'antd';
import { connect } from 'react-redux'
import './style.scss'
import { fetchBooks, deleteBook, saveBook, SUCCESS_ALERT } from '../../redux/books/actions'
import Book from '../Book/Book'
import Loader from '../Loader'
import PropTypes from 'prop-types';



const Search = Input.Search;
 class SearchInput extends React.Component {
     constructor() {
         super()
         this.searchInput = React.createRef();
     }
    
    handleApply = () => {
        this.props.fetchBooks({ q: this.searchInput.current.input.value })
    }

    render() { 
        const { books } = this.props;
  
        return (
            <div className={'wrapper-search'}>

            <div className={'search_text'}>Search books:</div>
            <div className='input-box'>  
            <Input placeholder="input search text" ref={this.searchInput} placeholder="type name of book" />
            <Button onClick={this.handleApply} >
            <Icon type="search" />
            </Button>
            </div>
            <div className={'list_book'}>
            
            {books.map(b => <Book onSave={this.props.saveBook}  onDelete={this.props.deleteBook} key={b.id} {...b} />)}
            </div>
            {this.props.loading ? 
                <Loader/> :
                 null
                }
          </div>
        )
    }
       
    
}

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
        loading: state.books.loading ,
        alertMessage: state.books.alertMessage

    })),
    { fetchBooks, deleteBook, saveBook }
)(SearchInput)