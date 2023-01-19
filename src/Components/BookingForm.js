import React, {useReducer, useState} from "react";
import { useFormik } from "formik";
// import {useNavigate} from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
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

  const[arrIndex,setIndex] = useState(-1);
  // const navigate = useNavigate();

  function removeElem() {
    const newItems = [...props.arrItems];
    newItems.splice(arrIndex, 1);
    props.setArrItems(newItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    removeElem();
    // navigate('/');
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setResTime((prev) => {
      return{...prev, [name]:value};
    })
    if(e.target.name=="resTime"){
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
    
      <VStack className="contactForm" alignItems="flex-start">
        <Heading as="h1" >
          Book Now
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="date">Choose Date: </FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  onChange={handleChange}
                  // onChange={formik.handleChange}
                  // value={formik.values.firstName}
                  // onBlur={formik.handleBlur}
                  // {...formik.getFieldProps("date")}
                />
                <FormErrorMessage name="date">{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.restime && formik.touched.restime}>
                <FormLabel htmlFor="resTime">Choose Time:</FormLabel>
                <Select id="resTime" name="resTime" onChange={handleChange}>
                  <option value="-1">Select an Item</option>
                  {props.arrItems?.map((items,index)=> (
                    <option value={index}>{items}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                <FormLabel htmlFor="guests">Number of Guests:</FormLabel>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="10"
                  onChange={handleChange}
                  // onChange={formik.handleChange}
                  // value={formik.values.firstName}
                  // onBlur={formik.handleBlur}
                  // {...formik.getFieldProps("date")}
                />
                <FormErrorMessage name="guests">{formik.errors.guests}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
                <FormLabel htmlFor="occasion">Occasion: </FormLabel>
                <Select id="occasion" name="occasion" onChange={handleChange}>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </Select>
              </FormControl>

              <Button type="submit" colorScheme="purple" width="full" onClick={handleSubmit}>
                 {/* isLoading={isLoading}> */}
                Submit  
                {/* {isLoading && <Spinner thickness='2px' spacing={4} marginLeft={2}></Spinner>} */}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
  );
};

export default BookingForm;
