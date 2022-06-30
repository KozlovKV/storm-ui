import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavHeader from '../navHeader/NavHeader';
import { MainPage, CardsPage, DecsPage, EditDecPage } from './../pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/cards" element={<CardsPage/>} />
            <Route path="/decs" element={<DecsPage/>} />
            <Route path="/decs/:id" element={<EditDecPage/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
