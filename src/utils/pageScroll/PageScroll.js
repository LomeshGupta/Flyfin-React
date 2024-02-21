import "./pageScroll.scss"
import { useState, useEffect } from 'react';

export default function PageScroll() {


    const [scrollIsVisible, setscrollIsVisible] = useState(true);

    useEffect(() => {
      window.addEventListener("scroll", showschroll);
      return () => window.removeEventListener("scroll", showschroll);
    }, []);
    const showschroll = () => {
        let heightToHideFrom = 40;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
    
        if (window.scrollY > 200) {
        //   document.getElementById("navbar_top").classList.add("fixed-top");
          // add padding top to show content behind navbar
          let navbar_height = document.querySelector(".navbar").offsetHeight;
          document.body.style.paddingTop = navbar_height + "px";
        } else {
        //   document.getElementById("navbar_top").classList.remove("fixed-top");
          // remove padding top from body
          document.body.style.paddingTop = "0";
        }
      };

    const linkPageScroll = () =>{
        window.scrollTo({Top:0});
    }
  return (
    
    <>
     {scrollIsVisible ? (
        <div className="d-none"></div>
      ) : (
        <div className="scrollShow" onClick={linkPageScroll}>
          <i className="fas fa-angle-up moveScroll-icon">jhjhjhjhj</i>
        </div>
      )}
    </>
  )
}
