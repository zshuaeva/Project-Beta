import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import VehicleList from './VehicleList';
import ManufacturerForm from './ManufacturerForm';
import VehicleForm from './VehicleForm';
import InventoryList from './InventoryList';
import Technician from './Technician';
import ServiceAppointmentList from './AppointmentList';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='vehicles'>
            <Route path='' element={<VehicleList/>} />
            <Route path='new' element={<VehicleForm />} />
          </Route>
          <Route path="inventory">
            <Route path='' element={<InventoryList />}  />
          </Route>
          <Route path="appointments/">
            <Route path="" element={<ServiceAppointmentList/>} />
          </Route>
          <Route path='manufacturers'>
            <Route path="" element={<ManufacturerList />}  />
            <Route path="new" element={<ManufacturerForm />} />
          </Route>
          <Route path='technician' element={<Technician/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
