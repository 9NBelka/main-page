import CostMainProducts from '../CostMainProducts/CostMainProducts';
import scss from './CostScreen.module.css';

export default function CostScreen({ currentInfoAboutProduct, infoAboutProduct }) {
  // Массив всех нужных ID с именами
  // Константы для каждого курса
  const ArhiV = 201;
  const ArchiS = 101;

  // Функция для поиска данных курса по ID
  const findCourseById = (id, data) => {
    const product = data.find((product) =>
      product.productCourse.some((course) => course.id === id),
    );
    return product?.productCourse.find((course) => course.id === id);
  };

  // Данные для конкретных курсов
  const courseArhiV = findCourseById(ArhiV, infoAboutProduct);
  const courseArchiS = findCourseById(ArchiS, infoAboutProduct);

  // console.log(selectedCourses);

  return (
    <div>
      <div className={scss.costBlockProducts}>
        {currentInfoAboutProduct.productCourse.map((product) => (
          <CostMainProducts key={product.id} currentInfoAboutProduct={product} />
        ))}
      </div>

      <CostMainProducts key={ArhiV} currentInfoAboutProduct={courseArhiV} />
      <CostMainProducts key={ArchiS} currentInfoAboutProduct={courseArchiS} />

      {/* <CostMainProducts key={desiredCourses.id} currentInfoAboutProduct={course} /> */}

      {/* <CostMainProducts key={101} currentInfoAboutProduct={selectedCourses} /> */}
    </div>
  );
}
