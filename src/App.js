import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Specials from './Components/Specials';

function App() {
  return (
    <>
      
      <main class="main">
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
        <Specials />
      </main>  
    </>
  );
}

export default App;
