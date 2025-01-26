import CostMainProducts from '../CostMainProducts/CostMainProducts';
import css from './CostBundleProducts.module.css';

export default function CostBundleProducts({
  bundle,
  arhitectureVanilla,
  arhitectureStandart,
  teamLeadVanilla,
  teamLeadStandart,
  teamLeadAdvanced,
  unitTestingVanilla,
  unitTestingStandart,
  courseArhitectureVanilla,
  courseArhitectureStandart,
  courseTeamLeadVanilla,
  courseTeamLeadStandart,
  courseTeamLeadAdvanced,
  courseUnitTestingVanilla,
  courseUnitTestingStandart,
}) {
  const bundleTwo = true;
  return (
    <div className={css.costBlockProducts}>
      <div className={css.bundleBlockColumn}>
        <div className={css.bundleBlocks}>
          <CostMainProducts
            key={unitTestingVanilla}
            currentInfoAboutProduct={courseUnitTestingVanilla}
            bundle={bundle}
          />

          <CostMainProducts
            key={arhitectureVanilla}
            currentInfoAboutProduct={courseArhitectureVanilla}
            bundle={bundle}
            bundleTwo={bundleTwo}
          />
        </div>
        <h6 className={css.bundleBlocksCourseName}>
          {courseUnitTestingVanilla.productCourseName +
            ` (${courseUnitTestingVanilla.productCourseVersion})` +
            ` + ` +
            courseArhitectureVanilla.productCourseName +
            ` (${courseArhitectureVanilla.productCourseVersion})`}
        </h6>
      </div>
      <div className={css.bundleBlockColumn}>
        <div className={css.bundleBlocks}>
          <CostMainProducts
            key={teamLeadVanilla}
            currentInfoAboutProduct={courseTeamLeadVanilla}
            bundle={bundle}
          />

          <CostMainProducts
            key={arhitectureVanilla}
            currentInfoAboutProduct={courseArhitectureVanilla}
            bundle={bundle}
            bundleTwo={bundleTwo}
          />
        </div>
        <h6 className={css.bundleBlocksCourseName}>
          {courseUnitTestingVanilla.productCourseName +
            ` (${courseUnitTestingVanilla.productCourseVersion})` +
            ` + ` +
            courseArhitectureVanilla.productCourseName +
            ` (${courseArhitectureVanilla.productCourseVersion})`}
        </h6>
      </div>
      <div className={css.bundleBlockColumn}>
        <div className={css.bundleBlocks}>
          <CostMainProducts
            key={arhitectureVanilla}
            currentInfoAboutProduct={courseArhitectureVanilla}
            bundle={bundle}
          />
          <CostMainProducts
            key={unitTestingVanilla}
            currentInfoAboutProduct={courseUnitTestingVanilla}
            bundle={bundle}
            bundleTwo={bundleTwo}
          />
        </div>
        <h6 className={css.bundleBlocksCourseName}>
          {courseUnitTestingVanilla.productCourseName +
            ` (${courseUnitTestingVanilla.productCourseVersion})` +
            ` + ` +
            courseArhitectureVanilla.productCourseName +
            ` (${courseArhitectureVanilla.productCourseVersion})`}
        </h6>
      </div>
    </div>
  );
}
