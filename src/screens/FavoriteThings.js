import React from 'react';
import Things from './Things';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
    <div>
        <h2>Favorite Things</h2>
        <ul>
            <li>
                <Link to={`${match.url}/jazz`}>Jazz Music</Link>
            </li>
            <li>
                <Link to={`${match.url}/italian`}>Italian Food</Link>
            </li>
            <li>
                <Link to={`${match.url}/cruising`}>Caribbean Cruise with Spouse</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:thingsId`} component={Things} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Click on a link to find out more!</h3>}
        />
    </div>
);
export default FavoriteThings;