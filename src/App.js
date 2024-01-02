
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import DialogsPage from './components/Dialogs/DialogsPage';
import ProfilePage from './components/Profile/ProfilePage';

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <BrowserRouter>
               <Header></Header>
           <NavBar></NavBar>
          <Routes>
        
            <Route path='/DialogsPage' element={<DialogsPage/>}></Route>
            <Route path='/ProfilePage' element={<ProfilePage/>}></Route>
        </Routes>
        </BrowserRouter>

        </div>
    </div>
  );
}

export default App;
