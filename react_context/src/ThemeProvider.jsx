import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
    const [color, setColor] = useState('goldenrod');
    const toggleColor = () => {
        setColor(color => color === 'goldenrod' ? 'darkslateblue' : 'goldenrod');
    };
    return (
        <ThemeContext.Provider value={{ color, toggleColor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;