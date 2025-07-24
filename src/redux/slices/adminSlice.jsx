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
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id,
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
