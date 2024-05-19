import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import  Users from './components/UserComponents/Users';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Users/>} exact />
      <Route path="*" element={ <Navigate to="/" replace />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
