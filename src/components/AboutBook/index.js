import React from 'react'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import { Link } from 'react-router-dom'
import './style.scss'


const AboutBook = ({ book: { volumeInfo}}) => {

    return (
        <div>
            <Link to={'/search'}>
            <Icon type="arrow-left" className={'arrow_back'} />
            </Link>
             <div className='book-container'>
                <div className='img-container'>
                        <img className='image' src={volumeInfo.imageLinks.smallThumbnail}></img>
                </div>
                <div className='title-description-box'>
                    <div className='book-title'>
                            <h5>{volumeInfo.title}</h5>             
                    </div>
                    <div className='book-author'>
                            <h5>{volumeInfo.authors.join(', ')}</h5>             
                    </div>
                    <div className='book-descriptopn'>
                    {volumeInfo.description}
                    </div>

                </div>
             </div>
        </div>
    )
}

export default connect((state, ownProps) => 
 ({ book: state.books.booksList.find((book) => book.id === ownProps.match.params.id) }))(AboutBook)