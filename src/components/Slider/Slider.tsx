import { Carousel } from '@mantine/carousel';

import '@mantine/carousel/styles.css';
import './Slider.scss';

function Slider() {
  return (
    <div className="carousel">
      <Carousel
        withIndicators
        height="100%"
        align="start"
        slideSize="100%"
        slideGap="md"
        className="slider"
        style={{ flex: 1 }}
      >
        <Carousel.Slide className="slide">
          <div className="lefty">1</div>

          <div className="righty">1</div>
        </Carousel.Slide>

        <Carousel.Slide className="slide">
          <div className="lefty">2</div>

          <div className="righty">2</div>
        </Carousel.Slide>

        <Carousel.Slide className="slide">
          <div className="lefty">3</div>

          <div className="righty">3</div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}

export default Slider;
