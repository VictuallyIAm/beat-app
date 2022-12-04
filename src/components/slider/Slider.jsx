import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import './slider.scss'
import { sliderData } from './slider-data'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Link as Linkto } from 'react-scroll'

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
        const { id, image, heading, desc, to } = slide
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
                  {index === 3 && (
                    <Linkto to="beats" className="btn">
                      {' '}
                      <p>Lets go</p>
                    </Linkto>
                  )}
                  {index !== 3 && (
                    <Link to={to} className="btn">
                      {' '}
                      Lets go
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
