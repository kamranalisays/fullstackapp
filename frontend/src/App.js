import './App.css';
import {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import NewPlace from './components/PlacesComponent/NewPlace';
import Users from './pages/Users';

function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Users/>} exact />
      <Route path="/places/new" element={<NewPlace/>} exact />
      <Route path="*" element={ <Navigate to="/" replace />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
