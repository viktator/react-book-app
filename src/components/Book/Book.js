import React, {Component} from 'react'
import { Card, Icon, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import defaultImg from './default_img.jpg'

const { Meta } = Card;

 class Book extends Component {

  handleDelete = () => {
    this.props.onDelete(this.props.id)
  }

  handleSave = () => {
    
    this.props.onSave(this.props.id)
  }
  render () { 
    const { imageLinks } = this.props.volumeInfo;
    const imgUrl = imageLinks && imageLinks.thumbnail ?
    imageLinks.thumbnail : defaultImg;
    
    return (
   
      <Card
      style={{ width: 250 }}
      cover={<img alt="example" src={imgUrl} />}
      actions={[<Icon onClick={this.handleSave} type="save" />, <Icon onClick={this.handleDelete} type="delete"  />]}
    >
    <Link to={`/books/${this.props.id}`}>
   
      <Meta
        avatar={<Avatar src={imgUrl} />}
        title={this.props.volumeInfo.title}
      
      /> 
       </Link>
    </Card>
   
    )
  }
  }

  export default Book

