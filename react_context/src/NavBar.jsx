import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const NavBar = () => {

    const { color, toggleColor } = useContext(ThemeContext)
    return (
        <nav style={{ color }}>
            <span>Website </span>
            <button onClick={toggleColor}>Toggle Theme</button>
        </nav>
    )
};

export default NavBar;