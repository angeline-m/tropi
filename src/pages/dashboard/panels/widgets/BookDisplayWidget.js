import React from "react"
import Book from "../../../../component/Book"


const BookDisplayWidget = (props) => {
    if(!props.book){
        return null
    }
    else {
        return (
            <div className="book-display">
                {
                    props.book.map((book)=>(
                        <Book key={book.id} title={book.title} author={book.author} lastPage={book.lastPage} totalPages={book.totalPages} status={book.status}/>
                    ))
                }
            </div>
        )
    }
}

export default BookDisplayWidget