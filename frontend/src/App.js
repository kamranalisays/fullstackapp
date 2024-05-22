import {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';


import Users from './pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './pages/UserPlaces';

import './App.css';


function App() {
  return (
   <BrowserRouter>
   <MainNavigation/>
   <main>
   <Routes>
      <Route path="/" element={<Users/>} exact />
      <Route path="/:userId/places" element={<UserPlaces/>} exact> </Route>
      <Route path="*" element={ <Navigate to="/" replace />} />
    </Routes>
    </main>
   </BrowserRouter>
  );
}

export default App;
