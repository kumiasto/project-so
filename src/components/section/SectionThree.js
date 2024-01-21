import { useEffect, useRef } from 'react';
import hoverEffect from 'hover-effect';
import { Expo } from 'gsap/src/all';
import gsap from 'gsap';
import { MdKeyboardArrowRight as Right } from 'react-icons/md';

import leftOne from '../../assets/04_koloryzacja.webp';
import leftTwo from '../../assets/04_hover_koloryzacja.webp';
import rightOne from '../../assets/05_so_pure.webp';
import rightTwo from '../../assets/05_hover_so_pure.webp';
import bgc from '../../assets/heightMap.png';
import '../../styled/section/section-three.scss';

const SectionThree = () => {
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
      imagesRatio: 0.5,
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

    imgLeftRef.current.addEventListener('mouseenter', handleMouseEnter);

    return () =>
      imgLeftRef?.current.removeEventListener('mouseenter', handleMouseEnter);
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
    imgLeftRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () =>
      imgLeftRef?.current.removeEventListener('mouseenter', handleMouseLeave);
  }, []);

  useEffect(() => {
    const [headerTop, headerBottom] = headerRightRef.current.children;
    const [textTop, textBottom] = textRightRef.current.children;

    function handleMouseEnter() {
      gsap.to(headerTop, 0.4, { y: 180 });
      gsap.to(headerBottom, 0.4, { y: 200 });
      gsap.to(textTop, 0.4, { y: 20, ease: Expo.easeIn });
      gsap.to(textBottom, 0.6, { y: 35 });
      gsap.to(iconRightRef.current, 0.4, { x: 25, delay: 0.1 });
    }

    imgRightRef.current.addEventListener('mouseenter', handleMouseEnter);

    return () =>
      imgRightRef?.current.removeEventListener('mouseenter', handleMouseEnter);
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
    imgRightRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () =>
      imgRightRef?.current.removeEventListener('mouseenter', handleMouseLeave);
  }, []);

  return (
    <section className='section-three'>
      <div ref={imgLeftRef} className='section-three__left'>
        <div className='section-three__left-wrapper'>
          <div ref={headerLeftRef} className='section-three__headers-left'>
            <h2 className='section-three__left-header section-three__left-header--top'>
              KEUNE <br />
              KOLORYZACJA
            </h2>
            <h2 className='section-three__left-header section-three__left-header--bottom'>
              KEUNE <br />
              KOLORYZACJA
            </h2>
          </div>
          <div className='section-three__left-content'>
            <div className='section-three__left-line'></div>
            <div ref={textLeftRef} className='section-three__left-texts'>
              <p className='section-three__left-text section-three__left-text--top '>
                ODKRYJ SERIE
              </p>
              <p className='section-three__left-text section-three__left-text--bottom'>
                ODKRYJ SERIE
              </p>
            </div>
            <div ref={iconLeftRef} className='section-three__left-icon'>
              <Right style={{ fontSize: '1.5rem' }} />
            </div>
          </div>
        </div>
      </div>
      <div ref={imgRightRef} className='section-three__right'>
        <div className='section-three__right-wrapper'>
          <div ref={headerRightRef} className='section-three__headers-right'>
            <h2 className='section-three__right-header section-three__right-header--top'>
              KEUNE <br />
              SO PURE
            </h2>
            <h2 className='section-three__right-header section-three__right-header--bottom'>
              KEUNE <br />
              SO PURE
            </h2>
          </div>
          <div className='section-three__right-content'>
            <div className='section-three__right-line'></div>
            <div ref={textRightRef} className='section-three__right-texts'>
              <p className='section-three__right-text section-three__right-text--top'>
                ODKRYJ SERIE
              </p>
              <p className='section-three__right-text section-three__right-text--bottom'>
                ODKRYJ SERIE
              </p>
            </div>
            <div ref={iconRightRef} className='section-three__right-icon'>
              <Right style={{ fontSize: '1.5rem' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
