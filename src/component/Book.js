import React from "react"

const Book = ({title, author, lastPage, totalPages, status}) => {
    return (
        <>
        <p>{title}</p>
        <p>{author}</p>
        <p>{lastPage}/{totalPages}</p>
        <p>{status}</p>
        </>
    )
}

export default Book