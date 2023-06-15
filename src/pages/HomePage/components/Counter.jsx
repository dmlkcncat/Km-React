import { useEffect, useState } from "react";
import { useSpring, animated } from '@react-spring/web'

const Counter = () => {
    const [count, setCount] = useState(1);
    const props = useSpring({ number: count, from: { number: 1 }, config: { duration: 100 } })

    useEffect(() => {
        const timer = setInterval(() => {
            if (count < 1000) {
                setCount(count + 1)
            }
        }, 0.5);
        return () => {
            clearInterval(timer)
        };
    }, [count])

    return (
        <>
            <div className="flex flex-row gap-6 justify-center p-5 sm:[grid grid-cols-1] md:[grid grid-cols-1]">
                <div className="flex justify-center items-center">
                    <div className="bg-blue-200 rounded-full shadow-2xl h-48 w-48 flex justify-center items-center">
                        <div className="flex flex-col">
                            <p className="text-gray-800 text-2xl font-bold">
                                <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1>
                            </p>
                            <p>Tamamlanan Proje</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-blue-300 rounded-full shadow-2xl h-48 w-48 flex justify-center items-center">
                        <div className="flex flex-col">
                            <p className="text-gray-800 text-2xl font-bold">
                                <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1>
                            </p>
                            <p>Tamamlanan Proje</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-blue-400 rounded-full shadow-2xl h-48 w-48 flex justify-center items-center">
                        <div className="flex flex-col">
                            <p className="text-gray-800 text-2xl font-bold">
                                <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1>
                            </p>
                            <p>Tamamlanan Proje</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-blue-500 rounded-full shadow-2xl h-48 w-48 flex justify-center items-center">
                        <div className="flex flex-col">
                            <p className="text-gray-800 text-2xl font-bold">
                                <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1>
                            </p>
                            <p>Tamamlanan Proje</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Counter

