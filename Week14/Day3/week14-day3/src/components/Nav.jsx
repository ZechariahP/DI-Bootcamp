import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <header>
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/phone'> Phone </Link>
                <Link to='/shop'> Shop </Link>
            </nav>
        </header>
    );
};

export default Nav;
