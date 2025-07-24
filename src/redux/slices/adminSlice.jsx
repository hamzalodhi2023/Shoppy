import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all users (admin only)
export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  response.data;
});

// Add the create user action
export const addUser = createAsyncThunk(
  "admin/addUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Update user info
export const updateUser = createAsyncThunk(
  "admin/updateUser",
  async ({ id, name, email, role }, { rejectWithValue }) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${userId}`,
      { name, email, role },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    response.data;
  },
);

// Delete user
export const deleteUser = createAsyncThunk("admin/deleteUser", async (id) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  return id;
});

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updateUser = action.payload;
        const userIndex = state.users.findIndex(
          (user) => user._id === updateUser._id,
        );
        if (userIndex !== -1) {
          state.user[userIndex] = updatedUser;
        }
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); //add a new user to the state
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; //set the error message
      });
  },
});
export default adminSlice.reducer;
