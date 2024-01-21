import { useEffect, useRef, useState, useContext } from 'react';
import {
  MdKeyboardArrowLeft as Left,
  MdKeyboardArrowRight as Right,
} from 'react-icons/md';
import { Expo } from 'gsap/src/all';
import gsap from 'gsap';

import { ColorContext } from '../../context/ColorContext';
import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import '../../styled/slider/slider.scss';

const Slider = () => {
  const { black, setBlack } = useContext(ColorContext);
  const [imageIndex, setImageIndex] = useState(0);
  const slideOneRef = useRef();
  const slideTwoRef = useRef();
  const slideThreeRef = useRef();
  const slideFourRef = useRef();
  const lineRef = useRef();
  const subheaderRef = useRef();

  const images = [img1, img2, img3, img4];

  const animationTime = {
    sliderTime: 5000,
    delay: 0.7,
    lineTime: 0.3,
    textTime: 0.3,
  };

  const { sliderTime, delay, lineTime, textTime } = animationTime;

  function prevSlide() {
    setImageIndex(
      imageIndex > images.length - 1
        ? images.length - 1
        : imageIndex <= 0
        ? images.length - 1
        : imageIndex - 1
    );
  }

  function nextSlide() {
    setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
  }

  function checkIsActive(slide) {
    return slide.classList.contains('slider__img--active') ? true : false;
  }

  function slideAnimationIfVisible(slide, line) {
    gsap.to(slide, 1, { width: '100%', right: 0 });
    gsap.to(line, lineTime, { width: '65%', delay: delay });
  }

  function slideAnimationIfNotVisible(slide, line) {
    gsap.to(slide, 1, { width: '0%', right: '100%' });
    gsap.to(line, lineTime, { width: '5%', ease: Expo.easeIn });
  }

  function setRight(slide) {
    gsap.set(slide, { right: 0 });
  }

  function textAnimation(textOne, textTwo) {
    gsap.fromTo(textOne, textTime, { y: -100 }, { y: 0 });
    gsap.fromTo(textTwo, textTime, { y: -100 }, { y: 0, delay: 0.1 });
  }

  function showText() {
    switch (imageIndex) {
      case 0:
        return (
          <div ref={subheaderRef} className='slider__subheader'>
            <p>Wyjątkowy kolor, naturalny blask</p>
            <p style={{ fontSize: '2rem' }}>KEUNE SEMI COLOR</p>
          </div>
        );
      case 1:
        return (
          <div ref={subheaderRef} className='slider__subheader'>
            <p>Odkryj świat pełen kolorów</p>
            <p style={{ fontSize: '2rem' }}>KEUNE CHAMELEON</p>
          </div>
        );
      case 2:
        return (
          <div ref={subheaderRef} className='slider__subheader'>
            <p>Pielęgnacja, która zaczyna się od Ciebie</p>
            <p style={{ fontSize: '2rem' }}>KEUNE YOU</p>
          </div>
        );
      case 3:
        return (
          <div ref={subheaderRef} className='slider__subheader'>
            <p>Zachwycaj włosami!</p>
            <p style={{ fontSize: '2rem' }}>POBIERZ APLIKACJĘ</p>
          </div>
        );
    }
  }

  useEffect(() => {
    const sliderInterval = setTimeout(nextSlide, sliderTime);
    setBlack(!black);
    return () => clearTimeout(sliderInterval);
  }, [imageIndex]);

  useEffect(() => {
    const [textOne, textTwo] = subheaderRef.current.children;

    textAnimation(textOne, textTwo);

    if (checkIsActive(slideOneRef.current)) {
      setRight(slideOneRef.current);
      slideAnimationIfVisible(slideOneRef.current, lineRef.current);
    } else {
      slideAnimationIfNotVisible(slideOneRef.current, lineRef.current);
    }

    if (checkIsActive(slideTwoRef.current)) {
      setRight(slideTwoRef.current);
      slideAnimationIfVisible(slideTwoRef.current, lineRef.current);
    } else {
      slideAnimationIfNotVisible(slideTwoRef.current, lineRef.current);
    }

    if (checkIsActive(slideThreeRef.current)) {
      setRight(slideThreeRef.current);
      slideAnimationIfVisible(slideThreeRef.current, lineRef.current);
    } else {
      slideAnimationIfNotVisible(slideThreeRef.current, lineRef.current);
    }

    if (checkIsActive(slideFourRef.current)) {
      setRight(slideFourRef.current);
      slideAnimationIfVisible(slideFourRef.current, lineRef.current);
    } else {
      slideAnimationIfNotVisible(slideFourRef.current, lineRef.current);
    }
  }, [imageIndex]);

  return (
    <div className='slider'>
      <div className='slider__container'>
        <div className={black ? 'slider__img-text' : 'slider__img-text white'}>
          <h1 className='slider__header'>o1.</h1>
          {showText()}
        </div>

        <div className='slider__button'>
          <div
            ref={lineRef}
            className={
              black ? 'slider__button-line' : 'slider__button-line white'
            }
          ></div>
          <button
            className={
              black ? 'slider__button-icon' : 'slider__button-icon white'
            }
          >
            <Right style={{ fontSize: '1.5rem' }} />
          </button>
        </div>

        <div className='slider__wrapper '>
          <img
            ref={slideOneRef}
            src={images[0]}
            className={
              imageIndex === 0
                ? 'slider__img slider__img--active'
                : 'slider__img'
            }
          />
        </div>
        <div className='slider__wrapper'>
          <img
            ref={slideTwoRef}
            src={images[1]}
            className={
              imageIndex === 1
                ? 'slider__img slider__img--active'
                : 'slider__img'
            }
          />
        </div>
        <div className='slider__wrapper'>
          <img
            ref={slideThreeRef}
            src={images[2]}
            className={
              imageIndex === 2
                ? 'slider__img slider__img--active'
                : 'slider__img'
            }
          />
        </div>
        <div className='slider__wrapper'>
          <img
            ref={slideFourRef}
            src={images[3]}
            className={
              imageIndex === 3
                ? 'slider__img slider__img--active'
                : 'slider__img'
            }
          />
        </div>
        <div className={black ? 'slider__nav' : 'slider__nav white'}>
          <div
            className={
              black ? 'slider__nav-button' : 'slider__nav-button white'
            }
          >
            <Left style={{ fontSize: '2rem' }} onClick={prevSlide} />
            <Right style={{ fontSize: '2rem' }} onClick={nextSlide} />
          </div>
          <div
            className={
              black ? 'slider__nav-controls' : 'slider__nav-controls white'
            }
          >
            <div className='slider__nav-controls slider__nav-controls-container'>
              <div
                onClick={() => setImageIndex(0)}
                className={
                  imageIndex === 0
                    ? 'slider__nav-controls-container-circle active active--black'
                    : 'slider__nav-controls-container-circle'
                }
              ></div>
              <div
                onClick={() => setImageIndex(1)}
                className={
                  imageIndex === 1
                    ? 'slider__nav-controls-container-circle active'
                    : 'slider__nav-controls-container-circle'
                }
              ></div>
              <div
                onClick={() => setImageIndex(2)}
                className={
                  imageIndex === 2
                    ? 'slider__nav-controls-container-circle active active--black'
                    : 'slider__nav-controls-container-circle'
                }
              ></div>
              <div
                onClick={() => setImageIndex(3)}
                className={
                  imageIndex === 3
                    ? 'slider__nav-controls-container-circle active'
                    : 'slider__nav-controls-container-circle'
                }
              ></div>
            </div>
            <div className='slider__nav-controls-line'></div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '1vh',
              }}
            >
              <div
                className={
                  imageIndex === 0
                    ? 'slider__nav-controls-line-circle slider__nav-controls-line-circle--active'
                    : 'slider__nav-controls-line-circle'
                }
              ></div>
              <div
                className={
                  imageIndex === 1
                    ? 'slider__nav-controls-line-circle slider__nav-controls-line-circle--active'
                    : 'slider__nav-controls-line-circle'
                }
              ></div>
              <div
                className={
                  imageIndex === 2
                    ? 'slider__nav-controls-line-circle slider__nav-controls-line-circle--active'
                    : 'slider__nav-controls-line-circle'
                }
              ></div>
              <div
                className={
                  imageIndex === 3
                    ? 'slider__nav-controls-line-circle slider__nav-controls-line-circle--active'
                    : 'slider__nav-controls-line-circle'
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
