import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselExample() {
  return (
    <Carousel className="carousel-16-10">
      <Carousel.Item>
        <div className="carousel-content" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1533238607503-085e90da04c7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2300&amp;q=80)'}}>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548407260-f8b207183bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2223&q=80)'}}>
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1544612289-bcab56ed6311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2207&q=80)'}}>
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;