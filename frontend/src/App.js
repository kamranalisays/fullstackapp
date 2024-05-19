import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import  Users from './components/UserComponents/Users';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Users/>} exact />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
