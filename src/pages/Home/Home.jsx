/* eslint-disable no-unused-vars */
import HeroSection from "./HeroSection/HeroSection";
import OurCoreServices from "./OurCoreServices/OurCoreServices";
import Experience from "./Experience/Experience";
import Testimonial from "./Testimonial/Testimonial";
import VideoSection from "./VideoSection/VideoSection";
import ClientSection from "./ClientSection/ClientSection";

import Header from "../Header/Header";
import Physiotherapy from "./Physiotherapy/Physiotherapy";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurCoreServices />
      <Experience />
      <Testimonial />
      <VideoSection />
      <ClientSection />
      <Physiotherapy/>
    </div>
  );
};

export default Home;

//  VideoSection ma problem chhe......
