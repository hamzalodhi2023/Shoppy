import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}`;
const USER_TOKEN = `Bearer ${localStorage.getItem("token")}`;

// async thunk to fetch admin products
export const fetchAdminProducts = createAsyncThunk(
  "adminProduct/fetchAdminProducts",
  async () => {
    const response = await axios.get(`${API_URL}api/admin/products`, {
      headers: {
        Authorization: USER_TOKEN,
      },
    });
  },
);
