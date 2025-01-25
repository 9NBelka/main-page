import CostBundleProducts from '../CostBundleProducts/CostBundleProducts';
import CostMainProducts from '../CostMainProducts/CostMainProducts';
import scss from './CostScreen.module.css';

export default function CostScreen({ currentInfoAboutProduct, infoAboutProduct }) {
  // Константы для каждого курса
  const bundle = true;
  const arhitectureVanilla = 101;
  const arhitectureStandart = 102;
  // const TeamLeadVanilla = 201;
  // const TeamLeadStandart = 202;

  // Функция для поиска данных курса по ID
  const findCourseById = (id, data) => {
    const product = data.find((product) =>
      product.productCourse.some((course) => course.id === id),
    );
    return product?.productCourse.find((course) => course.id === id);
  };

  // Данные для конкретных курсов
  const courseArhitectureVanilla = findCourseById(arhitectureVanilla, infoAboutProduct);
  const courseArhitectureStandart = findCourseById(arhitectureStandart, infoAboutProduct);

  return (
    <div className={scss.cost}>
      <div className={scss.costBlockProducts}>
        {currentInfoAboutProduct.productCourse.map((product) => (
          <CostMainProducts key={product.id} currentInfoAboutProduct={product} />
        ))}
      </div>

      <div className={scss.costBlockBundleProducts}>
        <CostBundleProducts
          arhitectureVanilla={arhitectureVanilla}
          arhitectureStandart={arhitectureStandart}
          courseArhitectureVanilla={courseArhitectureVanilla}
          courseArhitectureStandart={courseArhitectureStandart}
          bundle={bundle}
        />
        <CostBundleProducts
          arhitectureVanilla={arhitectureVanilla}
          arhitectureStandart={arhitectureStandart}
          courseArhitectureVanilla={courseArhitectureVanilla}
          courseArhitectureStandart={courseArhitectureStandart}
          bundle={bundle}
        />
        <CostBundleProducts
          arhitectureVanilla={arhitectureVanilla}
          arhitectureStandart={arhitectureStandart}
          courseArhitectureVanilla={courseArhitectureVanilla}
          courseArhitectureStandart={courseArhitectureStandart}
          bundle={bundle}
        />
      </div>
    </div>
  );
}
