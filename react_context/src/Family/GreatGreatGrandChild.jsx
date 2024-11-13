import React, { useContext } from 'react';
import Countcontext from './CountContext';

function GreatGreatGrandChild() {
    const count = useContext(Countcontext)
    return (
        <div style={{ border: '4px solid yellowgreen', margin: '1rem' }}>
            <p>I'm the great-great-grandchild!</p>
            <p>I also consume count : {count}</p>
            {/* <button onClick={addToCount}>Increment Count</button> */}
        </div>
    )
};

export default GreatGreatGrandChild;