import { useNavigate } from "react-router-dom"
import { VStack } from "@chakra-ui/react";

const SuccessfulBooking = () => {

    const nav = useNavigate();
    function handleClick(){
        nav('/')
    }
    return(
        <VStack className="successfulSection">
            <h1 className="font-big">Booking Successful!</h1>
            <button className="SuccessfulBtn" onClick={handleClick}>Home</button>
        </VStack>
    )
}

export default SuccessfulBooking