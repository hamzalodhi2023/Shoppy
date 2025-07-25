import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
// Fetch all orders (admin only)
export const fetchAllOrders = createAsyncThunk();
