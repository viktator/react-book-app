
import React from 'react'
import Book from '../Book/Book'
import './style.scss'
import { connect } from 'react-redux'
import {deleteFromSave} from '../../redux/books/actions'



class Favorite extends React.Component {

   
    render() {
         
        return (
            <div className={'books_list_marked'}>
            {this.props.saveBooks.map(b => <Book onDelete={this.props.deleteFromSave}  key={b.id} {...b} />)}
            </div>
        )
    }
}


export default connect((state ) => ({
    saveBooks: state.books.favoritesBooks || []
}), { deleteFromSave})(Favorite)
