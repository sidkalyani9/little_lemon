import BookingForm from "./BookingForm";
import { useState } from "react";

const Booking = () => {

    const initializeTimes = (date) => {
        // return(fetchAPI(date));
        return (['17:00','18:00','19:00','20:00','21:00','22:00'])
    }

    const [arrItems,setArrItems] = useState(initializeTimes());


    return(
        <BookingForm arrItems={arrItems} setArrItems={setArrItems} initializeTimes={initializeTimes}/>
    )
}

export default Booking;