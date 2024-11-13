import React from 'react';

function GreatGrandChild({ count, addToCount }) {
    return (
        <div style={{ border: '4px solid #7FDBFF', margin: '1rem' }}>
            <p>I'm the great-grandchild!</p>
            <p>Count is : {count}</p>
            <button onClick={addToCount}>Increment Count</button>
        </div>
    )
};

export default GreatGrandChild;