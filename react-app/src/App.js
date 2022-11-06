import './App.scss';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Dashboard/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import VerifyEmail from './components/VerifyEmail/VerifyEmail';

function App() {
  // `${process.env.BASE_URL}/users/${savedUser._id}/verify/${token.token}`

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/users/:id/verify/:token' element={<VerifyEmail/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
