import { Carousel } from "flowbite-react";
import { useState, useEffect, useRef } from "react";

const CCarousel = () => {
  const [height, setHeight] = useState(100);

  const itemRef = useRef();

  useEffect(() => {
    if (itemRef.current) {
      const yValue = itemRef.current.getBoundingClientRect().y;
      setHeight(window.innerHeight - yValue);
    }
  }, [itemRef]);

  return (
    <>
      <div
        ref={itemRef}
        className="relative w-full"
        style={{ height: `${+height}px` }}
      >
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default CCarousel;
