import React, { useContext } from 'react';
import Countcontext from './CountContext';
import GreatGreatGrandChild from './GreatGreatGrandChild';

function GreatGrandChild() {
    const count = useContext(Countcontext)
    return (
        <div style={{ border: '4px solid #7FDBFF', margin: '1rem' }}>
            <p>I'm the great-grandchild!</p>
            <p>Count is : {count}</p>
            <GreatGreatGrandChild />
            {/* <button onClick={addToCount}>Increment Count</button> */}
        </div>
    )
};

export default GreatGrandChild;