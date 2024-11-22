import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const NavBar = () => {

    const backgroundColor = useContext(ThemeContext)
    return (
        <nav style={{ backgroundColor }}>
            <span>Website</span>
        </nav>
    )
};

export default NavBar;