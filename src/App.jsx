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

  // Проверяем, найден ли currentInfo
  const currentInfoId = currentInfo ? currentInfo.id : null;

  console.log('Текущий ID курса:', currentInfoId);

  // Функция для получения ID продукта
  const getCourseIdById = (id) => {
    switch (id) {
      case 0:
        return 100;
      case 1:
        return 200;
      case 2:
        return 300;
      default:
        return null;
    }
  };

  const productId = getCourseIdById(currentInfoId);

  // Проверяем, найден ли productId
  const currentInfoAboutProduct = productId
    ? infoAboutProduct.find((item) => item.id === productId)
    : null;

  if (!currentInfoId || !currentInfoAboutProduct) {
    console.warn('Информация о продукте не найдена:', { currentInfoId, productId });
  }

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
      <Route
        path='/teamlead'
        element={
          <TeamLead
            currentInfo={currentInfo}
            currentInfoAboutProduct={currentInfoAboutProduct}
            infoAboutProduct={infoAboutProduct}
          />
        }
      />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
