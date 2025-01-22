import CostMainProducts from '../CostMainProducts/CostMainProducts';

export default function CostScreen({ infoAboutProduct }) {
  return (
    <div>
      <CostMainProducts infoAboutProduct={infoAboutProduct} />
    </div>
  );
}
