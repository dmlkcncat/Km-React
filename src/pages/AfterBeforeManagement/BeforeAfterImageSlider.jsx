import { useRef, useState } from 'react'

const BeforeAfterImageSlider = ({ beforeImage, afterImage, width, height }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (event) => {
    if (isDragging) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const offsetX = event.clientX - containerRect.left
      const sliderPosition = (offsetX / containerRect.width) * 100
      setSliderPosition(sliderPosition)
    }
  }

  const handleMarkerClick = (event) => {
    const containerRect = containerRef.current.getBoundingClientRect()
    const offsetX = event.clientX - containerRect.left
    const sliderPosition = (offsetX / containerRect.width) * 100
    setSliderPosition(sliderPosition)
  }

  return (
    <div
      className="before-after-container"
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        overflow: 'hidden',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div
        className="slider-indicator"
        style={{ left: `${sliderPosition}%` }}
        onClick={handleMarkerClick}
      ></div>
      <img
        src={beforeImage}
        alt="Before"
        style={{
          position: 'absolute',
          width: '100%',
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          userSelect: 'none',
          pointerEvents: 'none',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <img
        src={afterImage}
        alt="After"
        style={{
          position: 'absolute',
          width: '100%',
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          userSelect: 'none',
          pointerEvents: 'none',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  )
}
export default BeforeAfterImageSlider
