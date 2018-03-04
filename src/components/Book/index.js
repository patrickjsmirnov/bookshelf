import React, {Component} from 'react';
import './style.css';

class Book extends Component {
  constructor(props) {
    super(props);

    this.openCloseBook = this.openCloseBook.bind(this);

    this.state = {
      isBookOpen: false
    }
  }

  openCloseBook() {
    this.setState({
      isOpenBook: !this.state.isOpenBook
    })
  }


  render() {
    const {title, description, author, date} = this.props.book;
    const isOpenBook = this.state.isOpenBook;
    const bookDescription = isOpenBook && <div className="book-item-description">{description}</div>

    return (
      <div className="book-item">
        <h2 className="book-item-title">{title}</h2>
        <div className="book-item-author">{author}</div>
        <div className="book-item-date">{date}</div>

        <button
          className={"book-item-open-close-btn " + (isOpenBook ? 'open': 'close')}
          onClick={this.openCloseBook}>
          Содержание
        </button>

        {bookDescription}


      </div>
    )
  }
}



export default Book;
