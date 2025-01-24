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
  const currentInfo = info.find((item) => item.id === courseId);

  const currentInfoId = currentInfo.id;

  const getCourseIdById = (currentInfo) => {
    switch (currentInfo) {
      case 0:
        return 100;
      case 1:
        return 200;
      default:
        return null;
    }
  };

  const productId = getCourseIdById(currentInfoId);
  const currentInfoAboutProduct = infoAboutProduct.find((item) => item.id === productId);

  // console.log('Valid IDsddd:', currentInfoId);

  return (
    <Routes>
      <Route path='/' element={<Portal />} />
      <Route
        path='/architecture'
        element={
          <Architecture
            currentInfo={currentInfo}
            currentInfoAboutProduct={currentInfoAboutProduct}
            infoAboutProduct={infoAboutProduct}
          />
        }
      />
      <Route path='/teamlead' element={<TeamLead currentInfo={currentInfo} />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
