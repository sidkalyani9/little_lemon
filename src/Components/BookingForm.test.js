import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Initialize function is printing time options',() =>{
    const handleSubmit = jest.fn();
    const arrItems = ["17:00","18:00","19:00","20:00","21:00","22:00",];
    render(<BookingForm arrItems={arrItems} setArrItems={handleSubmit} />);
    const resTime = screen.getByLabelText(/Choose Time:/)
    expect(resTime.childElementCount).toBe(7)
})

test('Booked Time is Removed if a Booking is Submitted' , () => {
    
    const arrItems = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const handleSubmit = jest.fn();
    render(<BookingForm arrItems={arrItems} setArrItems={handleSubmit} />);
    
    const guests = screen.getByLabelText(/Number of Guests:/);
    fireEvent.change(guests,{target: {value: "2"} });

    const select =  screen.getByLabelText(/Choose Time:/);
    fireEvent.change(select,{target: {key: '4'}});

    const submitBtn = screen.getByText("Submit");
    fireEvent.click(submitBtn);

    const resTime = screen.getByLabelText(/Choose Time:/)
    expect(resTime.childElementCount).toBe(7)
})