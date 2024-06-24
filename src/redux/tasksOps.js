import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://6679a33c18a459f63950d525.mockapi.io/contactshttps://6679a33c18a459f63950d525.mockapi.io";

export const fetchTasks = createAsyncThunk('fetchAllTasks', async () => {
    const response = await axios.get('/contacts');
    return response.data;
})

