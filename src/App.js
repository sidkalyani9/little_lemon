import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Specials from './Components/Specials';
import BookingForm from './Components/BookingForm';

function App() {
  return (
    <>
      
      <main class="main">
        <BrowserRouter>
          <Nav />

          
        </BrowserRouter>
        
      </main>  
    </>
  );
}

export default App;
