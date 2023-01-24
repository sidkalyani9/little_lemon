import {Link,Route,Routes} from 'react-router-dom';
import  Logo from '../icons_assets/Logo .svg';
import BookingForm from './BookingForm';
import Home from './Home';
import Specials from './Specials';
import { useState } from 'react';
import SuccessfulBooking from './SuccessfulBooking';
import Booking from './Booking';

function Nav() {

    const initializeTimes = (date) => {
        // return(fetchAPI(date));
        return (['17:00','18:00','19:00','20:00','21:00','22:00'])
    }

    const [arrItems,setArrItems] = useState(initializeTimes());


    return(
        <header class="nav">
            <nav>
                <img src={Logo} className="logo" alt="logo"/>
                <Link class="nav-elements" to="/">Home</Link>
                <Link class="nav-elements" to="/">About</Link>
                <Link class="nav-elements" to="/">Menu</Link>
                <Link class="nav-elements" to="/">Reservations</Link>
                <Link class="nav-elements" to="/">Order Online</Link>
                <Link class="nav-elements" to="/">Login</Link>
                <Routes>
                    <Route path="/"  element={<><Home /><Specials /></>}></Route>
                    <Route path="/book"  element={<Booking />}></Route>
                    <Route path="/bookingform" element={<BookingForm arrItems={arrItems} setArrItems={setArrItems} initializeTimes={initializeTimes}/>}></Route>
                    <Route path="/successful"  element={<SuccessfulBooking />}></Route>
                </Routes>
            </nav>
        </header>
    )
}

export default Nav;