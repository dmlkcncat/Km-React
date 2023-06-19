import React from 'react';
import Counter from '../../../components/Counter';

const App = () => {
    return (
        <div className="flex flex-row gap-6 justify-center p-5 sm:[grid grid-cols-1] md:[grid grid-cols-1] bg-blue-100">
            <div className="flex justify-center items-center">
                <div className="bg-blue-300 rounded-full shadow-2xl h-48 w-48 flex justify-center items-center">
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-2xl font-bold">
                            {/* <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1> */}
                            <Counter from={1} to={10} />
                        </p>
                        <p>Tamamlanan Proje</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-blue-400 rounded-full shadow-2xl h-48 w-48 flex justify-center items-center">
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-2xl font-bold">
                            {/* <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1> */}
                            <Counter from={50} to={100} />
                        </p>
                        <p>Mutlu Müşteri</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-blue-500 rounded-full shadow-2xl h-48 w-48 flex justify-center items-center">
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-2xl font-bold">
                            {/* <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1> */}
                            <Counter from={1000} to={5000} />
                        </p>
                        <p>İlde Proje</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-blue-600 rounded-full shadow-2xl h-48 w-48 flex justify-center items-center">
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-2xl font-bold">
                            {/* <animated.h1>{props.number.to(number => Math.floor(number))}</animated.h1> */}
                            <Counter from={-10} to={0} />
                        </p>
                        <p>Tamamlanan Proje</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;