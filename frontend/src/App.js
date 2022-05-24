import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import { Home, Register, Login } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
