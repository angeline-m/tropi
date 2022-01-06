import React from "react";

const Book = ({title, author, lastPage, totalPages, status}) => {
    return (
        <>
        <p>{title}</p>
        <p>{author}</p>
        <p>{lastPage}/{totalPages}</p>
        <p>{status}</p>
        </>
    );
};

const BookDisplayWidget = (props) => {
    console.log(props)

    if(!props.book){
        return null;
    }
    else {
        return (
            <div class="bookDisplay">
                {
                    props.book.map((book)=>(
                        <Book key={book.id} title={book.title} author={book.author} lastPage={book.lastPage} totalPages={book.totalPages} status={book.status}/>
                    ))
                }
            </div>
        );
    }
}

export default BookDisplayWidget;