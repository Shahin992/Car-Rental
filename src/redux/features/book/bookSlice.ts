/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IBookingForm, TBooked } from "../../../Component/Types/Types";

interface Booking {
  id: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "canceled";
  approved: boolean;
}

interface BookingState {
  bookings: Booking[];
  booked: TBooked[];
  returnCar: TBooked[];
  bookedCar: IBookingForm[];
  confiremBooking: any;
  paymentInfo: any;
}

const initialState: BookingState = {
  booked: [],
  bookings: [],
  returnCar: [],
  bookedCar: [],
  confiremBooking: [],
  paymentInfo: [],
};
export const bookSlice = createSlice({
  name: "booked",
  initialState: initialState,
  reducers: {
    gettAllbookedHsitory: (state, action) => {
      state.booked = action.payload;
    },

    FilterBooked: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.booked = state?.booked?.filter((item) => item._id !== id);
      console.log(state.booked);
    },
    returnCar: (state, action: PayloadAction<TBooked[]>) => {
      const totalBookedCar = action.payload;
      state.returnCar = totalBookedCar.filter(
        (item) => item.isBooked === "confirmed" && item.totalCost == 0
      );
    },
    bookedCar: (state, action: PayloadAction<IBookingForm[]>) => {
      state.bookedCar = action.payload;
    },
    confiremBooking: (state, action) => {
      console.log("confiremBooking", action.payload);
      state.confiremBooking = action.payload;
    },
    paymentInformation: (state, action) => {
      state.paymentInfo = action.payload;
    },
  },
});
export const {
  confiremBooking,
  gettAllbookedHsitory,
  bookedCar,
  FilterBooked,
  paymentInformation,
  returnCar,
} = bookSlice.actions;
export const useBookhitory = (state: RootState) => state.booked.booked;
export const useAllBooked = (state: RootState) => state.booked.booked;
export const useReturnCar = (state: RootState) => state.booked.returnCar;
export const useBookedCar = (state: RootState) => state.booked.bookedCar;
export const useconfiremBooking = (state: RootState) =>
  state.booked.confiremBooking;
export const usepaymentInfo = (state: RootState) => state.booked.paymentInfo;
export default bookSlice.reducer;
