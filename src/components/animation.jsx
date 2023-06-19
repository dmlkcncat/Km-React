import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web'
import styles from '../../../style/custom.css';


export default function App() {
    const ref = useRef([]);
    const [items, set] = useState([]);
    const transitions = useTransition(items, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28b4d7' },
    });

    const reset = useCallback(() => {
        ref.current.forEach(clearTimeout);
        ref.current = [];
        set([]);
        ref.current.push(setTimeout(() => set(['Apples', 'Oranges', 'Kiwis']), 2000));
        ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000));
        ref.current.push(setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000));
    }, []);

    useEffect(() => {
        reset();
        return () => ref.current.forEach(clearTimeout);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {transitions((props, item) => (
                    <animated.div className={styles.transitionsItem} style={props} onClick={reset}>
                        <animated.div style={{ overflow: 'hidden', height: props.innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
            </div>
        </div>
    );
}