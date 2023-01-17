import {Link,Route,Routes} from 'react-router-dom';
import  Logo from '../icons_assets/Logo .svg';
import Home from './Home';
function Nav() {
    return(
        <header class="nav">
            <nav>
                <img src={Logo} className="logo" alt="logo"/>
                <Link class="nav-elements" to="/">ABC</Link>
                <Link class="nav-elements" to="/">ABC</Link>
                <Link class="nav-elements" to="/">ABC</Link>
                <Routes>
                    <Route path="/"  element={<Home />}></Route>
                </Routes>
            </nav>
        </header>
    )
}

export default Nav;