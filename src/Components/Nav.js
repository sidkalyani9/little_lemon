import {Link,Route,Routes} from 'react-router-dom';
import  Logo from '../icons_assets/Logo .svg';
import BookingForm from './BookingForm';
import Home from './Home';
import Specials from './Specials';
import { useState } from 'react';

function Nav() {

    const [arrItems,setArrItems] = useState(["17:00","18:00","19:00","20:00","21:00","22:00",]);
    return(
        <header class="nav">
            <nav>
                <img src={Logo} className="logo" alt="logo"/>
                <Link class="nav-elements" to="/">Home</Link>
                <Link class="nav-elements" to="/bookingform">Book A Table</Link>
                <Routes>
                    <Route path="/"  element={<><Home /><Specials /></>}></Route>
                    <Route path="/bookingform" element={<BookingForm arrItems={arrItems} setArrItems={setArrItems} />}></Route>
                </Routes>
            </nav>
        </header>
    )
}

export default Nav;