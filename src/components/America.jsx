import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { db } from '../utils/FirebaseConfig';
import ApiCheck from './ApiCheck';

import { signUp } from '../store/actions/AuthActions';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#FFFFFF',
        height: '90vh',
    },
}));

const Home = () => {
    const dispatch = useDispatch();

    const classes = useStyles();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const unsub = db.collection('books').onSnapshot((snapshot) => {
            const allBooks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBooks(allBooks);
        });
        return () => {
            unsub();
        };
    }, []);

    // const deleteBook = (id) => {
    //     db.collection('books').doc(id).delete();
    // };

    /** delete book code
         <div
            onClick={() => deleteBook(book.id)}
            className="book-delete"
            style={{ cursor: 'pointer' }} // add
        >
            <i className="material-icons">delete</i>
        </div>

        * add book code
         <AddBook />
     */

    return (
        <div className={classes.root}>
            <div>hello from America</div>
            <Button variant="contained" color="secondary" onClick={() => dispatch(signUp())}>
                Sign up user
            </Button>
            <ApiCheck />
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
