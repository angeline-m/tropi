import React, {useEffect, useState}  from "react";
import firebaseApp from '../../../firebase/firebaseConfig';
import BookDisplayWidget from "./widgets/BookDisplayWidget";

const ViewAll = (props) => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    function fetchBooks(){
        let docStore;
        const bookRef = firebaseApp.firestore().collection('1').doc('bookshelf').collection('book');
        bookRef.onSnapshot(snapshot => {
            docStore = snapshot.docs.map(doc=>doc.data());
            setBook(docStore);
        });
    }

    return (
        <section>
            <BookDisplayWidget book={book}/>
        </section>
    );

};

export default ViewAll;