import React from 'react';
import {Card, Icon, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import defaultImg from './default_img.jpg';
import PropTypes from 'prop-types';
import {message} from "antd";

const {Meta} = Card;

const Book = ({onDelete, onSave, volumeInfo, id}) => {

    const handleDelete = () => {
        onDelete(id)
    };

    const handleSave = () => {
        onSave(id)
        message.info('Your book was added to Favorite')
    };

    const {imageLinks} = volumeInfo;
    const imgUrl = imageLinks && imageLinks.thumbnail ?
        imageLinks.thumbnail : defaultImg;

    return (
        <Card
            style={{width: 250}}
            cover={<img alt="example" src={imgUrl}/>}
            actions={[<Icon onClick={handleSave} type="save"/>,
                <Icon onClick={handleDelete} type="delete"/>]}
        >
            <Link to={`/books/${id}`}>

                <Meta
                    avatar={<Avatar src={imgUrl}/>}
                    title={volumeInfo.title}
                />
            </Link>
        </Card>
    )

};

Book.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onSave: PropTypes.func,
    volumeInfo: PropTypes.object.isRequired,
    id: PropTypes.string
};
export default Book;

