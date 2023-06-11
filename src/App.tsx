import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import Login from './pages/login';
import PlanList from './pages/plan-list';
import Plans from './pages/plans';
import Hotels from './pages/hotels';
import Calculation from './pages/calculation';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plan-list" element={<PlanList />} />
          <Route path="/plan-list/plans" element={<Plans />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/calculate/:id" element={<Calculation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
