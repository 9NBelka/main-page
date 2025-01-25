import CostMainProducts from '../CostMainProducts/CostMainProducts';
import css from './CostBundleProducts.module.css';

export default function CostBundleProducts({
  bundle,
  arhitectureVanilla,
  arhitectureStandart,
  courseArhitectureVanilla,
  courseArhitectureStandart,
}) {
  const bundleTwo = true;
  return (
    <div className={css.bundleBlocks}>
      <CostMainProducts
        key={arhitectureVanilla}
        currentInfoAboutProduct={courseArhitectureVanilla}
        bundle={bundle}
      />

      <CostMainProducts
        key={arhitectureStandart}
        currentInfoAboutProduct={courseArhitectureStandart}
        bundle={bundle}
        bundleTwo={bundleTwo}
      />
    </div>
  );
}
