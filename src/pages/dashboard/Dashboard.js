import React, {useContext} from 'react'
import {Redirect, Link, useRouteMatch, Routes, Route} from 'react-router-dom'
import ViewAllPanel from './panels/ViewAllPanel'
import AddPanel from './panels/AddPanel'
import AddBookWidget from './panels/widgets/AddBookWidget'

const Dashboard = (props) => {

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <button onClick={AddPanel.toggleAddModal}>Add Book</button>
            <AddPanel/>
            <AddBookWidget/>
            <ViewAllPanel/>
        </div>
    )
    
}

export default Dashboard