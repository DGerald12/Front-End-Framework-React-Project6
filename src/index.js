import React from 'react';
import { render } from 'react-dom';
import Home from '../src/screens/Home';
import About from '../src/screens/About';
import FavoriteThings from '../src/screens/FavoriteThings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/favoritethings">Favorite Things</Link>
                </li>
            </ul>

            <hr />
            <hr />
            <hr />

            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/favoritethings" component={FavoriteThings} />
        </div>
    </Router>
);

render(<App />, document.getElementById('root'));