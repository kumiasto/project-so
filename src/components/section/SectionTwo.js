import { useEffect, useRef } from "react";
import { MdKeyboardArrowRight as Right } from "react-icons/md";
import hoverEffect from "hover-effect";
import { Expo } from "gsap/src/all";
import gsap from "gsap";

import leftOne from "../../assets/02_design.jpg";
import leftTwo from "../../assets/02_hover_style.jpg";
import rightOne from "../../assets/03_blend_1.jpg";
import rightTwo from "../../assets/03_hover_blend.jpg";
import bgc from "../../assets/heightMap.png";
import "../../styled/section/section-two.scss";

const SectionTwo = () => {
  const hoverSpeed = 1.1;
  
  const imgLeftRef = useRef();
  const headerLeftRef = useRef();
  const textLeftRef = useRef();
  const iconLeftRef = useRef();
  const imgRightRef = useRef();
  const headerRightRef = useRef();
  const textRightRef = useRef();
  const iconRightRef = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: imgLeftRef.current,
      intensity: 0.4,
      image1: leftOne,
      image2: leftTwo,
      displacementImage: bgc,
      speedIn: hoverSpeed,
      speedOut: hoverSpeed,
    });
  }, []);

  useEffect(() => {
    new hoverEffect({
      parent: imgRightRef.current,
      intensity: 0.4,
      image1: rightOne,
      image2: rightTwo,
      displacementImage: bgc,
      imagesRatio: 0.5,
      speedIn: hoverSpeed,
      speedOut: hoverSpeed,
    });
  }, []);

  useEffect(() => {
    const [headerTop, headerBottom] = headerLeftRef.current.children;
    const [textTop, textBottom] = textLeftRef.current.children;

    function handleMouseEnter() {
      gsap.to(headerTop, 0.4, { y: 200 });
      gsap.to(headerBottom, 0.4, { y: 200 });
      gsap.to(textTop, 0.4, { y: 20, ease: Expo.easeIn });
      gsap.to(textBottom, 0.6, { y: 35 });
      gsap.to(iconLeftRef.current, 0.4, { x: 25, delay: 0.1 });
    }

    imgLeftRef.current.addEventListener("mouseenter", handleMouseEnter);

    return () =>
      imgLeftRef?.current.removeEventListener("mouseenter", handleMouseEnter);
  }, []);

  useEffect(() => {
    const [headerTop, headerBottom] = headerLeftRef.current.children;
    const [textTop, textBottom] = textLeftRef.current.children;

    function handleMouseLeave() {
      gsap.to(headerTop, 0.4, { y: 0 });
      gsap.to(headerBottom, 0.4, { y: 0 });
      gsap.to(textTop, 0.4, { y: 0 });
      gsap.to(textBottom, 0.6, { y: 0 });
      gsap.to(iconLeftRef.current, 0.4, { x: 0 });
    }
    imgLeftRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () =>
      imgLeftRef?.current.removeEventListener("mouseenter", handleMouseLeave);
  }, []);

  useEffect(() => {
    const [headerTop, headerBottom] = headerRightRef.current.children;
    const [textTop, textBottom] = textRightRef.current.children;

    function handleMouseEnter() {
      gsap.to(headerTop, 0.4, { y: 200 });
      gsap.to(headerBottom, 0.4, { y: 200 });
      gsap.to(textTop, 0.4, { y: 30, ease: Expo.easeIn });
      gsap.to(textBottom, 0.6, { y: 35 });
      gsap.to(iconRightRef.current, 0.4, { x: 25, delay: 0.1 });
    }

    imgRightRef.current.addEventListener("mouseenter", handleMouseEnter);

    return () =>
      imgRightRef?.current.removeEventListener("mouseenter", handleMouseEnter);
  }, []);

  useEffect(() => {
    const [headerTop, headerBottom] = headerRightRef.current.children;
    const [textTop, textBottom] = textRightRef.current.children;

    function handleMouseLeave() {
      gsap.to(headerTop, 0.4, { y: 0 });
      gsap.to(headerBottom, 0.4, { y: 0 });
      gsap.to(textTop, 0.4, { y: 0 });
      gsap.to(textBottom, 0.6, { y: 0 });
      gsap.to(iconRightRef.current, 0.4, { x: 0 });
    }
    imgRightRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () =>
      imgRightRef?.current.removeEventListener("mouseenter", handleMouseLeave);
  }, []);

  return (
    <section className="section-two">
      <div ref={imgLeftRef} className="section-two__left">
        <div className="section-two__left-wrapper">
          <div ref={headerLeftRef} className="section-two__headers-left">
            <h2 className="section-two__left-header section-two__left-header--top">
              KEUNE
              <br /> DESIGN
            </h2>
            <h2 className="section-two__left-header section-two__left-header--bottom">
              KEUNE
              <br /> DESIGN
            </h2>
          </div>
          <div className="section-two__left-content">
            <div className="section-two__left-line" />
            <div ref={textLeftRef} className="section-two__left-texts">
              <p className="section-two__left-text section-two__left-text--top">
                ODKRYJ SERIE
              </p>
              <p className="section-two__left-text--bottom">ODKRYJ SERIE</p>
            </div>
            <div ref={iconLeftRef} className="section-two__left-icon">
              <Right style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        </div>
      </div>
      <div ref={imgRightRef} className="section-two__right">
        <div className="section-two__right-wrapper">
          <div ref={headerRightRef} className="section-two__headers-right">
            <h2 className="section-two__right-header section-two__right-header--top">
              KEUNE <br />
              BLEND
            </h2>
            <h2 className="section-two__right-header section-two__right-header--bottom">
              KEUNE <br />
              BLEND
            </h2>
          </div>
          <div className="section-two__right-content">
            <div className="section-two__right-line" />
            <div ref={textRightRef} className="section-two__right-texts">
              <p className="section-two__right-text section-two__right-text--top">
                ODKRYJ SERIE
              </p>
              <p className="section-two__right-text section-two__right-text--bottom">
                ODKRYJ SERIE
              </p>
            </div>
            <div ref={iconRightRef} className="section-two__right-icon">
              <Right style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
