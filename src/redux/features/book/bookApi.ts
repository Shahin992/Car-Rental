import { baseApi } from "../Api/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooked: builder.mutation({
      query: (data) => {
        return {
          url: "/bookings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["booking"],
    }),
    getAllBooked: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    getMyBook: builder.query({
      query: () => ({
        url: "/bookings/my-bookings",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),
    deleteBooked: builder.mutation({
      query: ({ bookedId }) => {
        return {
          url: `/bookings/${bookedId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["booking"],
    }),

    IsApproveBooked: builder.mutation({
      query: ({ bookedId }) => {
        return {
          url: `/bookings/${bookedId}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["booking"],
    }),
    paymentOfCustomer: builder.mutation({
      query: ({ payment }) => {
        return {
          url: "bookings/payment",
          method: "POST",
          body: payment,
        };
      },
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useGetMyBookQuery,
  useDeleteBookedMutation,
  useGetAllBookedQuery,
  useIsApproveBookedMutation,
  useAddBookedMutation,
  usePaymentOfCustomerMutation,
} = bookApi;
