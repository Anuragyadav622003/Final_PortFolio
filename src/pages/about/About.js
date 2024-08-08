
import React from 'react'; //3,4,6
import images from '../image/3.png'

import './About.css';
import { motion } from "framer-motion";
const About=()=>
{
    return (
      <>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12  about-img">
              <figure class="swing">
                <motion.img src={images} alt="profile pic" />{" "}
              </figure>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content ">
              <h1>About me</h1>
              <p>
                Greetings! I'm Anurag yadav, a dedicated B.Tech student with a
                profound passion for technology and innovation. Currently
                enrolled at University Institute of Engineering and Technology Kanpur, I'm pursuing a Bachelor's
                degree in Computer Science. My academic journey has been focused
                on gaining in-depth knowledge in Computer Science technology.
                Proficient in C and C++ and equipped with skills in WebDevoloper
                (MernStack,Html,Tailwind Css,Javascript, React Native), I take pride in
                successfully completing Food Delivery Website,Blood Bank
                Management,Quiz Application where I've applied
                my skills to address real-world challenges. Looking ahead, my
                goal is to Express Future Aspirations and Career Goals,
                leveraging my skills and knowledge to contribute meaningfully to
                the field of Computer Science . If you share a similar passion
                for technology and innovation, I'd love to connect! Feel free to
                connect with me on my linkedin profile{" "}
                <a href='https://www.linkedin.com/in/anurag-yadav-3704b1239/'><span>https://www.linkedin.com/in/anurag-yadav-3704b1239/</span></a>
                ,or drop me an email at<span> anuragyadav622003@gmail.com</span>. Thank you
                for taking the time to get to know me. I'm excited about the
                future possibilities in the ever-evolving world of technology!
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;