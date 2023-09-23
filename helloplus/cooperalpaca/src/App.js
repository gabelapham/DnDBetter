import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Simple Counter App</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default App;
