import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavHeader from '../navHeader/NavHeader';
import { MainPage, CardsPage, DecsPage, EditDecPage } from './../pages';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Container fluid='lg' as='main'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/cards' element={<CardsPage />} />
          <Route path='/decs' element={<DecsPage />} />
          <Route path='/decs/:id' element={<EditDecPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
