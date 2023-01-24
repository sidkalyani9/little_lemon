import React, { useState} from "react";
import { useFormik } from "formik";
import {useNavigate} from 'react-router-dom';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
// import useSubmit from "../hooks/useSubmit";



const BookingForm = (props) => {
  // const {isLoading, response, submit} = useSubmit();
  const [resTimeState, setResTime] = useState({
    date: "",
    resTime: "",
    guests: "1",
    occasion: ""
  });

  console.log(resTimeState);

  // const[arrIndex,setIndex] = useState(-1);
  const navigate = useNavigate();

  // function removeElem() {
  //   const newItems = [...props.arrItems];
  //   newItems.splice(arrIndex, 1);
  //   props.setArrItems(newItems);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   removeElem();
  //   navigate('/successful');
  // }

  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log(name + " " + value);
    setResTime((prev) => {
      return{...prev, [name]:value};
    })

    if(e.target.name==="date"){
      props.initializeTimes(e.target.value);
    }

    // if(e.target.name==="resTime"){
    //   setIndex(() => {
    //     return(e.target.value);
    //   })
    // }
    
  }

  const formik = useFormik({
    initialValues: {
      guests:1,
      date:"",
      resTime:"Select an Option",
      occasion:"Birthday",
    },

    onChange: (e) => {
      console.log(e.target.name)
      handleChange(e);
    },

    onSubmit:(e) =>{
      navigate('/successful');
    },

    validationSchema: Yup.object({
      date: Yup.string().required("Please Enter Date"),
      guests: Yup.number().required("Enter Number of Guests").min(1,"Enter minimum 1 Guests").max(10,"Enter maximum 10 Guests"),
    }),
  });

  return (
    
      <section className="bookingSection" onSubmit={formik.handleSubmit}>
        <Heading as="h1" className="bookingh1">
          <span className="YellowNoResize">Book</span> Now
        </Heading>
          <form>
            <VStack p={10} className="elements">
              <HStack>
              <FormControl isInvalid={formik.errors.date && formik.touched.date} w="60%" className="formElements">
                <VStack>
                <FormLabel htmlFor="date" >Choose Date: </FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  // onChange={handleChange}
                  className="dateformElements"
                  // onBlur={formik.handleBlur}
                  // onChange={handleChange}
                  {...formik.getFieldProps("date")}
                />
                
                <FormErrorMessage name="date" className="red">{formik.errors.date}</FormErrorMessage>
                </VStack>
              </FormControl>
              <FormControl isInvalid={formik.errors.resTime && formik.touched.resTime} className="formElements">
                <VStack>
                <FormLabel htmlFor="resTime">Choose Time:</FormLabel>
                <Select id="resTime" name="resTime" onChange={handleChange} className="selectformElement">
                  <option key="-1">16:00</option>
                  {props.arrItems?.map((items,index)=> (
                    <option key={index}>{items}</option>
                  ))}
                </Select>
                </VStack>
              </FormControl>
              </HStack>
              <HStack className="check">
                <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                  <VStack>
                  <FormLabel htmlFor="guests" className="guestsLabel">Number of Guests:</FormLabel>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    // onChange={handleChange}
                    className="guestformElement"
                    value="1"
                    // // onChange={formik.handleChange}
                    // value={formik.values.guests}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps("guests")}
                  />
                  <FormErrorMessage name="guests" className="red">{formik.errors.guests}</FormErrorMessage>
                  </VStack>
                </FormControl>

                <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
                  <VStack>
                  <FormLabel htmlFor="occasion">Occasion: </FormLabel>
                  <Select id="occasion" name="occasion" onChange={handleChange} className="ocassionformElement">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </Select>
                  </VStack>
                </FormControl>
              </HStack>
              <Button type="submit" colorScheme="purple" width="full" class="submitBtn">
                 {/* isLoading={isLoading}> */}
                Confirm  
                {/* {isLoading && <Spinner thickness='2px' spacing={4} marginLeft={2}></Spinner>} */}
              </Button>
              </VStack>
          </form>
        </section>
  );
};

export default BookingForm;
