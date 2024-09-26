export type TFilter = {
  priceRange: string;
  carType: string;
};
export type TUser = {
  status: string;
  name: string;
  _id: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address?: string;
  termsAccepted: boolean;
  isBlocked?: true;
};
export type TCar = {
  createdAt: string | number | Date;
  _id?: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  status?: "available" | "unavailable";
  pricePerHour: number;
  isDeleted?: boolean;
  AdditionalFeatures: string[];
  carType: ["SUV" | "Sedan" | "Hatchback" | "Convertible"];
  image?: string;
};

export type IBookingForm = {
  _id?: string;
  nidOrPassport: string;
  drivingLicense: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  startTime: string;
};
export type TBooked = {
  _id?: string;
  user?: string;
  carId?: string;
  endTime?: string;
  totalCost?: number;
  isBooked?: "unconfirmed" | "confirmed";
  isDeleted?: boolean;
  payment?: IBookingForm;
};

export interface Filters {
  carType: string;
  priceRange: [number, number];
  color: string;
  features: string[];
}

export interface CarState {
  car: TCar[];
  updateCar: TCar[] | undefined;
  filteredCars: TCar[];
  filters: Filters;
}
