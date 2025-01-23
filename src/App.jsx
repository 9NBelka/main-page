import Portal from './pages/Portal/Portal';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import info from './allPagesInformation.json';
import infoAboutProduct from './allPagesInformationAboutProducts.json';

import Architecture from './pages/Architecture/Architecture';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TeamLead from './pages/TeamLead/TeamLead';

export default function App() {
  const location = useLocation();

  // Получаем id курса на основе текущего пути
  const getCourseIdByPath = (path) => {
    const course = info.find((item) => item.path === path);
    return course ? course.id : null;
  };

  const courseId = getCourseIdByPath(location.pathname);

  // Находим информацию о курсе по id
  const currentInfo = info.find((item) => item.id === courseId);
  const currentInfoProduct = infoAboutProduct.find((item) => item.id === courseId);
  // const currentInfoProduct = infoAboutProduct.map((info, index) => {
  //   return info;

  // console.log(currentInfoProduct.id);
  // console.log(currentInfo.id);

  // currentInfoProduct.id === currentInfo.id ? console.log('da') : console.log('net');

  // }); // Разворачиваем вложенные объекты
  // Ищем по id
  return (
    <Routes>
      <Route path='/' element={<Portal />} />
      <Route
        path='/architecture'
        element={
          <Architecture
            currentInfo={currentInfo}
            infoAboutProduct={infoAboutProduct}
            currentInfoProduct={currentInfoProduct}
          />
        }
      />
      <Route
        path='/teamlead'
        element={<TeamLead currentInfo={currentInfo} currentInfoProduct={currentInfoProduct} />}
      />
      /
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
