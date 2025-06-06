import { BrowserRouter, Routes, Route } from 'react-router-dom';


import DefaultLayout from './Layouts/DefaultLayout';
import HomePage from './Pages/HomePage';
import Traveldetailcard from './Pages/TravelPage';
import AddTravel from './Componets/AddTravel';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" Component={HomePage} />
          <Route path="/Traveldetailcard/:id" Component={Traveldetailcard} />
          <Route path="/add-travel" Component={AddTravel} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;