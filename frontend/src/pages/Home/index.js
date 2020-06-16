import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './style.css';
import background from './back.png';

const items = [
  {
    src: background,
    altText: 'Primeiro Slide',
    caption: 'Banner'
  },

  {
    src: background,
    altText: 'Segundo Slide',
    caption: 'Banner'
  },

  {
    src: background,
    altText: 'Terceiro Slide',
    caption: 'Banner'
  }
];

const Home = () => {
  // Carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="container">
    <div class="row mb-1">
      

      {/* Carousel */}
      <section className="banner01">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </section>

      {/* Cards */}
      <section className="categories">
        <div className="container mt-1">

          <span className="categorias">Porque escolher o EDUCA?</span>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum deserunt mollit anim id est laborumdeserunt mollit anim id est laborumdeserunt mollit anim id est laborumdeserunt mollit anim id est laborumdeserunt mollit anim id est laborumdeserunt mollit anim id est laborum ."</p>
          <div className="row mt-3">
          </div>
        </div>
      </section>
      </div>

      {/* <section className="categories">
        <div className="container">
          <span className="categorias">Porque escolher o EDUCA?</span>
          <p>
            
          </p>
          <div className="row mt-2">
          </div>
        </div>
      </section> */}

    </div>
  );
}

export default Home;