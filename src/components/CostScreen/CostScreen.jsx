import CostBundleProducts from '../CostBundleProducts/CostBundleProducts';
import CostMainProducts from '../CostMainProducts/CostMainProducts';

export default function CostScreen({ infoAboutProduct, currentInfoProduct }) {
  // console.log(currentInfoProduct);

  // console.log(productsWithBuyNow);

  // console.log(productsWithBuyNow);

  // console.log(infoAboutProduct);
  return (
    <div>
      <CostMainProducts
        infoAboutProduct={infoAboutProduct}
        currentInfoProduct={currentInfoProduct}
      />
      <CostBundleProducts currentInfoProduct={currentInfoProduct} />
    </div>
  );
}
