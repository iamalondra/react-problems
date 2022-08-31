import React, { useState, useEffect } from "react";
import './ImageSlider.css'

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex)

  const handlePrevious = () => {
    setCurrentIndex((currentImage) => {
      if(currentImage <= 0){
          return slides.length - 1 
      }
      return currentImage - 1
    }); 
  };

  const handleNext = () => {
    setCurrentIndex((currentImage) => {
      if(currentImage >= slides.length - 1){
        return 0 
      }
      return currentImage + 1
    });

  };

  useEffect(() => {
    const interval = handleTransition()

    return() => {
      clearInterval(interval)
    }
  }, [])

  const handleTransition = () => {
   const interval = setInterval(() => {
     handleNext()
    }, 1000 * 3)
    return interval;
  }

  return (
    <div
     style={{
      backgroundColor: 'black',
      overflow: "hidden",
      margin: 'auto',
      width: "400px",
    }}
    >
      <div
        style={{
          whiteSpace:'nowrap',
          transition:`right ${currentIndex === 0? 0 : 0}s ease-out 2s`,
          position:'relative',
          right: `${400*currentIndex}px`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.url}
            alt={slide.title}
            style={{
              padding:'25px',
              width: "350px",
              height: "350px",
            }}
            className={currentIndex === index? "fadeIn" : "fadeOut"}
          />
        ))}
      </div>
      <button onClick={handleTransition}> Start Carousel </button>
      <button onClick={handlePrevious}>Previous -</button>
      <button onClick={handleNext}>Next +</button>
    </div>
  );
}
