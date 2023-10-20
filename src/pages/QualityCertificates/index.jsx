import React from 'react'
import { Button, Card } from 'flowbite-react'
import { useState } from 'react'

const pdfUrls = {
  kb1: '/certiciate/22-TR-OSY-EK297-certificate EN 1090_WPK.pdf',
  kb2: '/certiciate/22-TR-OSY-EK297-certificate EN ISO 3834.pdf',
  kb3: '/certiciate/22-TR-OSY-EK297-certificate_EN 1090_SWZ.pdf',
  kb4: '/certiciate/23-TR-OSY-EK525-certificate EN 1090 SWZE.pdf',
  kb5: '/certiciate/23-TR-OSY-EK525-certificate EN 1090 WPK.pdf',
  s1: '/certiciate/ISO 9001.pdf',
  s2: '/certiciate/ISO 31000.pdf',
  s3: '/certiciate/ISO1002.pdf',
  s4: '/certiciate/ISO45001.pdf',
}
const index = () => {
  const [selectedPdfKey, setSelectedPdfKey] = useState(null)

  const openPdfInNewTab = (pdfKey) => {
    const url = pdfUrls[pdfKey]
    window.open(url, '_blank')
  }
  return (
    <div>
      <div className="py-10 text-center font-extrabold text-[#1d5889] slider-font relative">
        <h2
          className="text-4xl md:text-5xl"
          style={{ fontSize: '2rem' }}
        >
          Kalite Belgeleri & Sertifikalar
        </h2>
        <div className="absolute w-80 h-2 bg-[#b5c2ce] bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      {selectedPdfKey && (
        <iframe
          title="PDF Viewer"
          src={pdfUrls[selectedPdfKey]}
          width="100%"
          height="500"
        />
      )}
      <div className="px-16 py-16 grid grid-cols-1 gap-5 md:grid-cols-3">
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/kb1.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">22-TR-OSY-EK297-certicicate EN 1090_WPK</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('kb1')}
          >
            <p>İncele</p>
          </Button>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/kb2.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">22-TR-OSY-EK297-certificate EN ISO 3834</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('kb2')}
          >
            <p>İncele</p>
          </Button>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/kb3.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">22-TR-OSY-EK297-certificate_EN 1090_SWZ</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('kb3')}
          >
            <p>İncele</p>
          </Button>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/kb4.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">23-TR-OSY-EK525-certificate EN 1090 SWZE</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('kb4')}
          >
            <p>İncele</p>
          </Button>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/kb5.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">23-TR-OSY-EK525-certificate EN 1090 WPK</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('kb5')}
          >
            <p>İncele</p>
          </Button>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/s1.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">ISO 9001</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('s1')}
          >
            <p>İncele</p>
          </Button>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/s2.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">ISO 31000</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('s2')}
          >
            <p>İncele</p>
          </Button>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/s3.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">ISO1002</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('s3')}
          >
            <p>İncele</p>
          </Button>
        </Card>
        <Card>
          <div className="image-hover img-zoom-in">
            <img
              src="/img/s4.PNG"
              alt=""
              style={{
                objectFit: 'cover',
                width: '100%',
                aspectRatio: '1',
              }}
            />
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p className="text-center">ISO45001</p>
          </p>
          <Button
            style={{ backgroundColor: '#b0b1b4' }}
            onClick={() => openPdfInNewTab('s4')}
          >
            <p>İncele</p>
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default index
