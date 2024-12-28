import { useState } from 'react';
import './VerticalSlider.css';

const slides = [
  {
    id: 1,
    title: 'ARCHITECTURE UNITY GAME',
    description:
      'Курс для того, хто має базову навичку в розробці, знання C# і хоче поглибити свої уявлення про архітектуру ігор індустріальних підходах, та й взагалі – про те, як ці ігри робити.',
    image: '/src/assets/img/portal/cardArch-size.webp',
    quantityMonths: '2',
    quantityVideo: '145',
    quantityHours: '17',
    quantityStudents: '474',
  },
  {
    id: 2,
    title: 'Team Lead',
    description:
      'Курс для того, хто має базову навичку в розробці, знання C# і хоче поглибити свої уявлення про архітектуру ігор індустріальних підходах, та й взагалі – про те, як ці ігри робити.',
    image: '/src/assets/img/portal/cardTeamlead-size.webp',
    quantityMonths: '1',
    quantityVideo: '16',
    quantityHours: '2',
    quantityStudents: '101',
  },
  {
    id: 3,
    title: 'ADVANCED UNIT TESTING IN UNITY',
    description:
      'Курс для того, хто має базову навичку в розробці, знання C# і хоче поглибити свої уявлення про архітектуру ігор індустріальних підходах, та й взагалі – про те, як ці ігри робити.',
    image: '/src/assets/img/portal/cardTesting-size.webp',
    quantityMonths: '2',
    quantityVideo: '14',
    quantityHours: '6',
    quantityStudents: '125',
  },
  {
    id: 4,
    title: 'Utility AI',
    description:
      'Курс для того, хто має базову навичку в розробці, знання C# і хоче поглибити свої уявлення про архітектуру ігор індустріальних підходах, та й взагалі – про те, як ці ігри робити.',
    image: '/src/assets/img/portal/cardAI-size.webp',
    quantityMonths: '',
    quantityVideo: '2',
    quantityHours: '5',
    quantityStudents: '102',
  },
  {
    id: 5,
    title: 'ADDRESSABLES: ANESTHESIA',
    description:
      'Курс для того, хто має базову навичку в розробці, знання C# і хоче поглибити свої уявлення про архітектуру ігор індустріальних підходах, та й взагалі – про те, як ці ігри робити.',
    image: '/src/assets/img/portal/cardAddress-size.webp',
    quantityMonths: '1',
    quantityVideo: '8',
    quantityHours: '4',
    quantityStudents: '56',
  },
  {
    id: 6,
    title: 'Слайд 6',
    description:
      'Курс для того, хто має базову навичку в розробці, знання C# і хоче поглибити свої уявлення про архітектуру ігор індустріальних підходах, та й взагалі – про те, як ці ігри робити.',
    image: '/src/assets/img/portal/cardUnitynew-size.webp',
    quantityMonths: '999',
    quantityVideo: '999',
    quantityHours: '999',
    quantityStudents: '999',
  },
];

const VerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Центральный слайд

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClickSlide = (index) => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    const nextIndex = (activeIndex + 1) % slides.length;
    const beforePrevIndex = (prevIndex - 1 + slides.length) % slides.length;
    const afterNextIndex = (nextIndex + 1) % slides.length;

    if (index === prevIndex) {
      handlePrev(); // Клик по верхнему слайду
    } else if (index === nextIndex) {
      handleNext(); // Клик по нижнему слайду
    } else if (index === beforePrevIndex) {
      setActiveIndex(beforePrevIndex); // Клик по "before-prev"
    } else if (index === afterNextIndex) {
      setActiveIndex(afterNextIndex); // Клик по "after-next"
    }
  };

  const getSlideClass = (index) => {
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    const nextIndex = (activeIndex + 1) % slides.length;
    const beforePrevIndex = (prevIndex - 1 + slides.length) % slides.length;
    const afterNextIndex = (nextIndex + 1) % slides.length;

    if (index === activeIndex) return 'active'; // Центральный слайд
    if (index === prevIndex) return 'prev'; // Верхний слайд
    if (index === nextIndex) return 'next'; // Нижний слайд
    if (index === beforePrevIndex) return 'before-prev'; // За пределами видимости сверху
    if (index === afterNextIndex) return 'after-next'; // За пределами видимости снизу
    return 'hidden'; // Остальные скрыты
  };

  return (
    <div className='sliderContainer'>
      <div className='slider'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${getSlideClass(index)}`}
            onClick={() => handleClickSlide(index)}>
            <img className='slideBackground' src={slide.image} alt={slide.title} />
            <div className='slideContent'>
              <div className='slideInfo'>
                <div>
                  <h2>{slide.title}</h2>
                  {/* {index === activeIndex && <p>{slide.description}</p>} */}
                  <p>{slide.description}</p>
                  <button className='slideButton'>Перейти</button>
                </div>
                <div className='slideInfoAboutCourseRow'>
                  <div className='slideInfoAboutCourse'>
                    <h5>{slide.quantityMonths}</h5>
                    <h6>months</h6>
                  </div>
                  <div className='slideInfoAboutCourse'>
                    <h5>{slide.quantityVideo}</h5>
                    <h6>videos</h6>
                  </div>
                  <div className='slideInfoAboutCourse'>
                    <h5>{slide.quantityHours}</h5>
                    <h6>hours</h6>
                  </div>
                  <div className='slideInfoAboutCourse'>
                    <h5>{slide.quantityStudents}</h5>
                    <h6>students</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className='controls'>
        <button className='prev-btn' onClick={handlePrev}>
          ▲
        </button>
        <button className='next-btn' onClick={handleNext}>
          ▼
        </button>
      </div> */}
    </div>
  );
};

export default VerticalSlider;
