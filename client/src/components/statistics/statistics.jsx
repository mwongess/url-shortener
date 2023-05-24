import React from 'react'
import './statistics.css'
function Statistics () {
  return (
    <div className='statistics-container'>
      <div className='statistics-heading'>
        <h1> Advanced Statistics</h1>
        <p className='statistics-desc'>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className=' statistics-holder'>
        <div className='center-line'></div>
        <div id='grid-1' className='statistics-growth'>
          <div className='statistics-growth--img'>
            <img
              src='../public/images/icon-brand-recognition.svg'
              alt='brand-recognition'
            />
          </div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div id='grid-2' className=' statistics-growth'>
          <div className='statistics-growth--img'>
            <img
              src='../public/images/icon-detailed-records.svg'
              alt='detailed-records'
            />
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div id='grid-3' className='statistics-growth'>
          <div className='statistics-growth--img'>
            <img
              src='../public/images/icon-fully-customizable.svg'
              alt='growth-customization'
            />
          </div>
          <h2>Fuly Customizable</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Statistics
