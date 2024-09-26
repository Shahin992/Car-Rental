import { baseApi } from "../Api/baseApi";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: () => ({
        url: "/cars",
        method: "GET",
      }),
      providesTags: ["cars"],
    }),
    getSingleCar: builder.query({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "GET",
      }),
      providesTags: ["cars"],
    }),
    deleteCar: builder.mutation({
      query: ({ carId }) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cars"],
    }),
    updateCarIntoDb: builder.mutation({
      query: ({ id, data }) => {
        console.log({ id, data });
        return {
          url: `cars/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["cars"],
    }),
    addNewCarIntoDb: builder.mutation({
      query: ({ data }) => {
        console.log({ data });
        return {
          url: `/cars/`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["cars"],
    }),
    returnCarIntoDb: builder.mutation({
      query: ({ data }) => {
        console.log({ data });
        return {
          url: `/cars/return`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetAllCarQuery,
  useGetSingleCarQuery,
  useDeleteCarMutation,
  useUpdateCarIntoDbMutation,
  useAddNewCarIntoDbMutation,
  useReturnCarIntoDbMutation,
} = carApi;
