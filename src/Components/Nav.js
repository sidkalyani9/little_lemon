import {Link,Route,Routes} from 'react-router-dom';
import  Logo from '../icons_assets/Logo .svg';
import Home from './Home';
import Specials from './Specials';

function Nav() {
    return(
        <header class="nav">
            <nav>
                <img src={Logo} className="logo" alt="logo"/>
                <Link class="nav-elements" to="/">Home</Link>
                <Link class="nav-elements" to="/specials">ABC</Link>
                <Link class="nav-elements" to="/">ABC</Link>
                <Routes>
                    <Route path="/"  element={<Home />}></Route>
                    <Route path="/specials" element={<Specials />}></Route>
                </Routes>
            </nav>
        </header>
    )
}

export default Nav;