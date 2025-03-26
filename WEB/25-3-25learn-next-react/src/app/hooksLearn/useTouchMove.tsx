'use client'

import { useState, useEffect, useRef } from 'react';

function useTouchMove() {
    const [count, setCount] = useState(0); // 计数器初始值为 0
    const touchStartX = useRef(0); // 记录触摸开始的 X 坐标
    const touchEndX = useRef(0); // 记录触摸结束的 X 坐标

    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX; // 获取触摸开始的 X 坐标
        };

        const handleTouchEnd = (e) => {
            touchEndX.current = e.changedTouches[0].clientX; // 获取触摸结束的 X 坐标
            handleDirection(); // 根据滑动方向调整计数器
        };

        const handleDirection = () => {
            const deltaX = touchEndX.current - touchStartX.current; // 计算 X 轴滑动的距离

            if (deltaX > 30) {
                // 右滑增加计数器
                setCount((prev) => prev + 1);
            } else if (deltaX < -30) {
                // 左滑减少计数器
                setCount((prev) => prev - 1);
            }
        };

        // 绑定触摸事件监听器
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        // 清理事件监听器
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return count; // 返回计数器的值
}

export default useTouchMove;
