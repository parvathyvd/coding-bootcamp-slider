import React, { useState } from "react";
import { PersonData } from "../data";

const Slider = () => {
  //Current slide is of index0
  const [currentSlide, setCurrentSlide] = useState(0);
  //max has the maximum number of slides
  const max = PersonData.length;
  //Next Slide Handler add 1 to the current index
  const onNextClickHandler = () => {
    setCurrentSlide((prev) => prev + 1);
    console.log("clicked", currentSlide, max);

    if (max - 1 === currentSlide) {
      setCurrentSlide(0);
    }
  };
  //Previous Slide Handler subtracts 1 from the current index

  const onPrevClickHandler = () => {
    setCurrentSlide((prev) => prev - 1);
    if (currentSlide === 0) {
      setCurrentSlide(max - 1);
    }
  };
  return (
    <section className="slider">
      <div className="person">
        {PersonData.map((person, index) => {
          console.log(index, currentSlide, max - 1);
          return (
            <>
              {currentSlide === index && (
                <>
                  <picture key={person.id} className="personImg-wrapper">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="person-image"
                    />
                  </picture>
                  <p className="blockquote">
                    <img src="./images/pattern-quotes.svg" alt="quotes" />
                  </p>
                  <div className="testimonial">
                    <p>{person.testimonial}</p>
                    <div className="person-detail">
                      <h3>{person.name}</h3>
                      <h4>{person.designation}</h4>
                    </div>
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
      <div className="blurb">
        <img
          src="./images/icon-prev.svg"
          alt="prev icon"
          onClick={onPrevClickHandler}
        />
        <img
          src="./images/icon-next.svg"
          alt="next icon"
          onClick={onNextClickHandler}
        />
      </div>
    </section>
  );
};

export default Slider;
