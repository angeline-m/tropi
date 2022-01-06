import React, {useContext} from 'react';
import {Redirect, Link, useRouteMatch, Routes, Route} from 'react-router-dom';
import ViewAllPanel from './panels/ViewAllPanel';

const Dashboard = (props) => {

    return (
        <>
            <section>
                <div class="container">
                    <h1>Dashboard</h1>
                    <ViewAllPanel/>
                </div>
            </section>
        </>
    );
    
}

export default Dashboard;