import Portal from './pages/Portal/Portal';
import { Route, Routes } from 'react-router-dom';

import Architecture from './pages/Architecture/Architecture';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Portal />} />
        <Route path='/architecture' element={<Architecture />} />
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
}
