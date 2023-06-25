//For async requests we would use createSlice
//
//fetchBaseQuery helps in making request to backend API
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

/*
 * The fetchBaseQuery function is a lightweight wrapper around the Fetch API, which allows you to send HTTP requests to a server and handle the responses.
 * By passing fetchBaseQuery as the baseQuery option when creating the API with createApi, you configure the API to use this function as the underlying mechanism for making HTTP requests.
 */
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

/*
 * createApi is a function that allows you to define a set of endpoints for performing CRUD (Create, Read, Update, Delete) operations against a RESTful API. It provides a more structured and standardized way of defining API-related logic in your Redux application.
 * The createApi function combines the functionality of createSlice and createAsyncThunk to generate a set of actions, reducers, and selectors for interacting with the API. It automatically generates the action creators and reducers for handling asynchronous API requests and manages the loading, success, and error states associated with those requests.
 * tagTypes define the type of the data that will be fetched back
 * "endpoint" represents a specific API operation or request that you want to define and generate actions and reducers for.
 * "builder" is a callback function that is passed to createApi for defining the endpoints and their configurations.
 */
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
//This slice will be added to the store
