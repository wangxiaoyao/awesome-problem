// 实现一个hooks：useTouchMove。当用户在移动端左右横滑时，依据横滑方向进行计数器的增减。
'use client'

import React from 'react';
import useTouchMove from '@hooks/useTouchMove';

export default function MyComponent() {
    const count = useTouchMove(); // 使用自定义 Hook

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Swipe Left or Right</h1>
            <p>Counter: {count}</p>
        </div>
    );
}
