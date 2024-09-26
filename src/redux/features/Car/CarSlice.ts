import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { CarState, Filters, TCar } from "../../../Component/Types/Types";

// Define a type for the slice state

// Define the initial state using that type
const initialState: CarState = {
  car: [],
  updateCar: [],
  filteredCars: [],
  filters: {
    carType: "",
    priceRange: [0, 5000],
    color: "",
    features: [],
  },
};

export const CarSlice = createSlice({
  name: "Cars",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getAllCar: (state, action: PayloadAction<TCar[]>) => {
      const totalCar = action.payload;
      const filterCar = totalCar?.filter(
        (item) => item.status !== "unavailable"
      );
      state.car = filterCar;
    },
    carUpdate: (state, action) => {
      state.updateCar = action.payload;
    },

    setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
      console.log(action);
      state.filters = { ...state.filters, ...action.payload };
    },
    filterCars: (state) => {
      console.log(state);
      state.filteredCars = state.car.filter((item) => {
        const matchesType = state.filters.carType
          ? item.name
              .toLowerCase()
              .includes(state.filters.carType.toLowerCase())
          : true;

        const matchesPrice =
          item.pricePerHour >= state.filters.priceRange[0] &&
          item.pricePerHour <= state.filters.priceRange[1];

        const matchesFeatures =
          Array.isArray(state.filters.features) &&
          state.filters.features.every((feature) =>
            item.features.includes(feature)
          );

        return matchesType && matchesPrice && matchesFeatures;
      });
    },
  },
});

export const { getAllCar, carUpdate, setFilters, filterCars } =
  CarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const useCar = (state: RootState) => state.cars.car;
export const useUpdate = (state: RootState) => state.cars.updateCar;
export const filteredCars = (state: RootState) => state.cars.filteredCars;

export default CarSlice.reducer;
