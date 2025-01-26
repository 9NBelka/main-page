import CostBundleProducts from '../CostBundleProducts/CostBundleProducts';
import CostMainProducts from '../CostMainProducts/CostMainProducts';
import scss from './CostScreen.module.css';

export default function CostScreen({ currentInfo, currentInfoAboutProduct, infoAboutProduct }) {
  // Константы для каждого курса
  const bundle = true;
  const arhitectureVanilla = 101;
  const arhitectureStandart = 102;
  const teamLeadVanilla = 201;
  // const TeamLeadStandart = 202;
  // const TeamLeadAdvanced = 203;
  const unitTestingVanilla = 301;
  // const UnitTestingStandart = 302;

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
  const courseTeamLeadVanilla = findCourseById(teamLeadVanilla, infoAboutProduct);
  // const courseTeamLeadStandart = findCourseById(arhitectureVanilla, infoAboutProduct);
  // const courseTeamLeadAdvanced = findCourseById(arhitectureVanilla, infoAboutProduct);
  const courseUnitTestingVanilla = findCourseById(unitTestingVanilla, infoAboutProduct);
  // const courseUnitTestingStandart = findCourseById(arhitectureVanilla, infoAboutProduct);

  return (
    <div className={scss.cost}>
      <div className={scss.costBlockProducts}>
        {currentInfoAboutProduct.productCourse.map((product) => (
          <CostMainProducts key={product.id} currentInfoAboutProduct={product} />
        ))}
      </div>

      <div className={scss.costBlockTitle}>
        <h5 className={scss.notification}>{currentInfo.notificationCourse}</h5>
        <h5 className={scss.costBlockTitleText}>{currentInfo.costScreenTitleBundle}</h5>
      </div>

      <CostBundleProducts
        arhitectureVanilla={arhitectureVanilla}
        teamLeadVanilla={teamLeadVanilla}
        unitTestingVanilla={unitTestingVanilla}
        courseArhitectureVanilla={courseArhitectureVanilla}
        courseTeamLeadVanilla={courseTeamLeadVanilla}
        courseUnitTestingVanilla={courseUnitTestingVanilla}
        bundle={bundle}
      />
      {/* <CostBundleProducts
        arhitectureStandart={arhitectureStandart}
        teamLeadVanilla={teamLeadVanilla}
        unitTestingVanilla={unitTestingVanilla}
        courseArhitectureStandart={courseArhitectureStandart}
        courseTeamLeadVanilla={courseTeamLeadVanilla}
        courseUnitTestingVanilla={courseUnitTestingVanilla}
        bundle={bundle}
      /> */}
    </div>
  );
}
