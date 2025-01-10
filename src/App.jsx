import Portal from './pages/Portal/Portal';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import info from './allPagesInformation.json';

import Architecture from './pages/Architecture/Architecture';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TeamLead from './pages/TeamLead/TeamLead';

export default function App() {
  const location = useLocation();

  // Получаем id курса на основе текущего пути
  const getCourseIdByPath = (path) => {
    switch (path) {
      case '/architecture':
        return 0;
      case '/teamlead':
        return 1;
      case '/design':
        return 2;
      case '/programming-basics':
        return 3;
      case '/advanced-unity':
        return 4;
      case '/data-science':
        return 5;
      default:
        return null; // Если путь не найден
    }
  };

  const courseId = getCourseIdByPath(location.pathname);

  // Находим информацию о курсе по id
  const currentInfo = info.find((item) => item.id === courseId);

  return (
    <>
      <Routes>
        <Route path='/' element={<Portal />} />
        <Route path='/architecture' element={<Architecture currentInfo={currentInfo} />} />
        <Route path='/teamlead' element={<TeamLead currentInfo={currentInfo} />} />/
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
