import React from 'react'

import Images from '../components/Images';
import Carousel from '../components/Carousel';

  
const Home = () => {
    return (
       <div>
       <Carousel images={Images}></Carousel>
       </div>
    )
}

export default Home;
