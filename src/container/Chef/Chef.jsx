import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Takiya Genji" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote_image" />
          <p className='p__opensans'>Communicate any assistance needed during busy periods to the Chef to ensure optimum services. Notify manager if a product does not meet specifications. Check and ensure the correctness of the temperature of appliances and food.</p>
        </div>
        <p className='p__opensans'>Monitor the quantity of food that is prepared and the portions that are served. Ensure proper portion, arrangement, and food garnish to be served. Serve food in proper portions onto proper receptacle. Set-up, clean and break down work station. Wash and disinfect kitchen area including tables, tools, knives, and equipment. Prepare ingredients for cooking, including portioning, chopping, and storing. Wash and peel fresh fruits and vegetables. Prepare and cook food.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Takiya Genji</p>
        <p className='p__opensan'>Chef & Founder</p>
        <img src={images.Takiya} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
