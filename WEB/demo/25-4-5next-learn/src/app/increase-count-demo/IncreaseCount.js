'use client'

import { useState } from 'react';

const IncreaseCount = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)} >click and increase 'count'</button>
            <p>count is：{count}</p>
        </div>
    )
}

export default IncreaseCount;