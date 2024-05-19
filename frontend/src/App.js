import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import  User from './components/UserComponent/User';
import NewPlace from './components/PlacesComponent/NewPlace';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<User/>} exact />
      <Route path="/places/new" element={<NewPlace/>} exact />
      <Route path="*" element={ <Navigate to="/" replace />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
