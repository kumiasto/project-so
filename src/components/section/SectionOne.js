import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Expo } from "gsap/src/all";
import { MdKeyboardArrowRight as Right } from "react-icons/md";
import hoverEffect from "hover-effect";

import img1 from "../../assets/01_care.jpg";
import img2 from "../../assets/01_hover_care.jpg";
import img3 from "../../assets/heightMap.png";
import "../../styled/section/section-one.scss";

const SectionOne = () => {
  const hoverSpeed = 1.1;
  const imgRef = useRef();
  const headerRef = useRef();
  const textRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: imgRef.current,
      intensity: 0.4,
      image1: img1,
      image2: img2,
      displacementImage: img3,
      imagesRatio: 0.5,
      speedIn: hoverSpeed,
      speedOut: hoverSpeed,
    });
  }, []);

  useEffect(() => {
    const [headerTop, headerBottom] = headerRef.current.children;
    const [textTop, textBottom] = textRef.current.children;

    function handleMouseEnter() {
      gsap.to(headerTop, 0.4, { y: 200 });
      gsap.to(headerBottom, 0.4, { y: 200 });
      gsap.to(textTop, 0.4, { y: 30, ease: Expo.easeIn });
      gsap.to(textBottom, 0.6, { y: 35 });
      gsap.to(iconRef.current, 0.4, { x: 25, delay: 0.1 });
    }

    imgRef.current.addEventListener("mouseenter", handleMouseEnter);

    return () =>
      imgRef?.current.removeEventListener("mouseenter", handleMouseEnter);
  }, []);

  useEffect(() => {
    const [headerTop, headerBottom] = headerRef.current.children;
    const [textTop, textBottom] = textRef.current.children;

    function handleMouseLeave() {
      gsap.to(headerTop, 0.4, { y: 0 });
      gsap.to(headerBottom, 0.4, { y: 0 });
      gsap.to(textTop, 0.4, { y: 0 });
      gsap.to(textBottom, 0.6, { y: 0 });
      gsap.to(iconRef.current, 0.4, { x: 0 });
    }

    imgRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () =>
      imgRef?.current.removeEventListener("mouseenter", handleMouseLeave);
  }, []);

  return (
    <section className="section-one">
      <div className="section-one__left">
        <div className="section-one__left-header">
          <h2 className="section-one__left-header__h2">o2.</h2>
          <h3 className="section-one__left-header__h3">
            MARKI
            <br /> KEUNE
          </h3>
        </div>
      </div>
      <div ref={imgRef} className="section-one__right">
        <div className="section-one__right-wrapper">
          <div ref={headerRef} className="section-one__headers">
            <h2 className="section-one__right-header section-one__right-header--top">
              KEUNE
              <br /> CARE
            </h2>
            <h2 className="section-one__right-header section-one__right-header--bottom">
              KEUNE
              <br /> CARE
            </h2>
          </div>
          <div className="section-one__content">
            <div className="section-one__right-line" />
            <div ref={textRef} className="section-one__right-texts">
              <p className="section-one__right-text section-one__right-text--top">
                ODKRYJ SERIE
              </p>
              <p className="section-one__right-text section-one__right-text--bottom">
                ODKRYJ SERIE
              </p>
            </div>
            <div ref={iconRef} className="section-one__right-icon">
              <Right style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
