import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = (props) => {

    return (
        <>
            <section>
                <div class="container">
                    <h1>Tropi Book Tracker</h1>
                    <p>Tropi is your virtual bookshelf. Add your books and track your progress across your shelf.</p>
                </div>
                <Link to="/dashboard">Enter</Link>
            </section>
        </>
    );
    
}

export default HomePage;