import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = (props) => {

    return (
        <>
            <section>
                <div className="container">
                    <h1>Tropi Book Tracker</h1>
                    <p>Tropi is your virtual bookshelf. Track the progress of all your books easily.</p>
                </div>
                <Link to="/dashboard">Enter</Link>
            </section>
        </>
    )
    
}

export default HomePage