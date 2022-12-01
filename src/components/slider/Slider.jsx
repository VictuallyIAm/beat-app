import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './slider.scss'
import { sliderData } from './slider-data'

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length
  const autoScroll = true
  let slideInterval
  let intervalTime = 5000

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  //   const auto = () => {
  //     slideInterval = setInterval(nextSlide, intervalTime);
  //   };

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
      }
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide, slideInterval, autoScroll])

  return (
    <div className="slider">
      <AiOutlineArrowLeft
        className="arrow prev"
        onClick={prevSlide}
      ></AiOutlineArrowLeft>
      <AiOutlineArrowRight
        className="arrow next"
        onClick={nextSlide}
      ></AiOutlineArrowRight>
      {sliderData.map((slide, index) => {
        const { id, image, heading, desc } = slide
        return (
          <div
            key={id}
            className={index === currentSlide ? 'slide current' : 'slide'}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
                <div className="content">
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr></hr>
                  <a href="#beat" className="btn">
                    Let's go!
                  </a>
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
