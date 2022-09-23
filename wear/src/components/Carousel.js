import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/style.css";
import React from 'react';


const Carousel = ({images}) => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
    autoplaySpeed: 3000,

};

console.log(images);

return (
	<>
	
	
	<div className="imgslider">
		<Slider {...settings}>
		{images.map((item) => (
			<div key={item.id}>
			<img src={item.src.img} alt={item.alt} />
			<img src={item.src.img1} alt={item.alt} />
			<img src={item.src.img2} alt={item.alt} />
			</div>
		))}
		</Slider>
	</div>
		</>
)
}
export default Carousel;
