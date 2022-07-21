import './App.css';
import { Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import HomePage from './components/homePage';
import AboutPage from './components/aboutPage';
import ContactPage from './components/contactPage';
import NoPage from './components/noPage';


function App() {
  return (<>
 
   <Navbar/>
   <Routes>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path="*" element={<NoPage />} />
    </Routes>  
   
</>
  );
}

export default App;

