
import './App.css';
import Login from './pages/login';
import {Routes,Route} from 'react-router-dom';

const App = ()=> {
  return (
    
      
      <Routes>
          <Route path = '/login' element = {<Login/>}></Route>
        </Routes>
      
        
        
  );
}

export default App;
