import './App.css';
import Content from './Content/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mailchimp from './switchtomailchimp/Mailchimp';
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Signup from './signup/Signup';

function App() {
  return (
    <>

   

 <Routes>

 <Route path='/' element={<Content/>}/>
 <Route path='Switchtomailchimp' element={<Mailchimp/>}/>
 <Route path='Login' element={<Login/>}/>
 <Route path='Signup' element={<Signup/>}/>


 </Routes>
 
    </>
  );
}

export default App;
