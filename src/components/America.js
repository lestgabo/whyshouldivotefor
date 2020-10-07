import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { db } from '../utils/firebaseConfig';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFFFFF',
    },
}));

const Home = () => {
    const classes = useStyles();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        console.log('effect');
        const unsub = db.collection('books').onSnapshot((snapshot) => {
            const allBooks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBooks(allBooks);
        });
        return () => {
            console.log('cleanup');
            unsub();
        };
    }, []);

    const deleteBook = (id) => {
        db.collection('books').doc(id).delete();
    };

    return (
        <div className={classes.root}>
            <div>hello from America</div>
            <div className="section section-books">
                <div className="container">
                    <h6>Books</h6>
                    <ul>
                        {books.map((book) => (
                            <li key={book.id}>
                                <div className="card book">
                                    <div className="book-details">
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-author">{book.author}</div>
                                    </div>
                                    <div
                                        onClick={() => deleteBook(book.id)}
                                        className="book-delete"
                                        style={{ cursor: 'pointer' }} // add
                                    >
                                        <i className="material-icons">delete</i>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
