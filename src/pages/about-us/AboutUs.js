
import OurSteemedClients from "../../components/about-us/Our-steemed-clients/OurSteemedClients";
import OurMissionStatement from "../../components/about-us/mission-statement/OurMissionStatement";
import OurVision from "../../components/about-us/our-vision/OurVision";
import OurApproach from "../../components/about-us/ourApproach/OurApproach";
import WhoWeAre from "../../components/about-us/who-we-are/WhoWeAre";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/services/Banner";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Banner />
      <OurVision/>
      <OurMissionStatement/>
      <WhoWeAre/>
      <OurApproach/>
      <testimonials/>
      {/* <OurSteemedClients/> */}
      <Footer />
    </>
  );
}
