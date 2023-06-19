import React from 'react';
import { useSpring, animated } from '@react-spring/web'

const Counter = ({ from, to }) => {
    const { number } = useSpring({
        from: { number: from },
        to: { number: to },
        config: { duration: 2000 },
    });

    return (
        <animated.span>
            {number.interpolate((value) => Math.round(value))}
        </animated.span>
    );
};

export default Counter;