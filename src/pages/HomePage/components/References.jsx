import React from 'react'
import { Card } from 'flowbite-react'

const References = () => {
  return (
    <div className="bg-[#f2f2f2] pb-5">
      <div
        className="py-10 text-center text-4xl font-extrabold text-[#1d5889] slider-font relative"
        style={{
          fontSize: '2rem',
        }}
      >
        Referanslar
        <div className="absolute w-80 h-2 bg-[#b5c2ce] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="py-16 grid grid-cols-6 gap-6">
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/1.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/2.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/3.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/4.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/5.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/6.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/7.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/8.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/references/9.jpg"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default References
