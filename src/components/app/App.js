import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavHeader from '../navHeader/NavHeader';
import { MainPage, CardsPage, DecsPage, EditDecPage, MagicPage } from './../pages';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Container fluid='lg' as='main' className='my-lg-5 my-3'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cards' element={<CardsPage />} />
          <Route path='/decs' element={<DecsPage />} />
          <Route path='/decs/:id' element={<EditDecPage />} />
          <Route path='/M4G1C' element={<MagicPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
