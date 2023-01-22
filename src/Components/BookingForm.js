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

  const[arrIndex,setIndex] = useState(-1);
  const navigate = useNavigate();

  function removeElem() {
    const newItems = [...props.arrItems];
    newItems.splice(arrIndex, 1);
    props.setArrItems(newItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    removeElem();
    navigate('/');
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setResTime((prev) => {
      return{...prev, [name]:value};
    })
    if(e.target.name==="resTime"){
      setIndex(() => {
        return(e.target.value);
      })
    }
    
  }

  const formik = useFormik({
    initialValues: {
      firstName:"",
      email:"",
      type:"Freelance project proposal",
      comment:"",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Please Enter Date"),
      restime: Yup.string().required("Please Enter a Time"),
      guests: Yup.string().required("Please Enter Number of Guests").min(1,"Enter minimum 1 characters"),
    }),
  });

  return (
    
      <section className="bookingSection">
        <Heading as="h1" className="bookingh1">
          <span className="YellowNoResize">Book</span> Now
        </Heading>
          <form>
            <VStack p={10} className="elements">
              <HStack>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName} w="60%" className="formElements">
                <VStack>
                <FormLabel htmlFor="date" >Choose Date: </FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  onChange={handleChange}
                  className="dateformElements"
                  // onChange={formik.handleChange}
                  // value={formik.values.firstName}
                  // onBlur={formik.handleBlur}
                  // {...formik.getFieldProps("date")}
                />
                </VStack>
                <FormErrorMessage name="date">{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.restime && formik.touched.restime} className="formElements">
                <VStack>
                <FormLabel htmlFor="resTime">Choose Time:</FormLabel>
                <Select id="resTime" name="resTime" onChange={handleChange} className="selectformElement">
                  <option key="-1">Select an Option</option>
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
                  <FormLabel htmlFor="guests">Number of Guests:</FormLabel>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    value="1"
                    onChange={handleChange}
                    className="guestformElement"
                    // onChange={formik.handleChange}
                    // value={formik.values.firstName}
                    // onBlur={formik.handleBlur}
                    // {...formik.getFieldProps("date")}
                  />
                  <FormErrorMessage name="guests">{formik.errors.guests}</FormErrorMessage>
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
              <Button type="submit" colorScheme="purple" width="full" onClick={handleSubmit} class="submitBtn">
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
