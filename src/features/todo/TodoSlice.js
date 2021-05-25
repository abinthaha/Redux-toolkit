import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ name: "Login", id: 0, isCompleted: false }],
  isLoading: false,
};

export const removeCompletedAsync = createAsyncThunk(
  "counter/fetchCount",
  async (todos) => {
    const response = await removeCompletedApi(todos);
    return response.data;
  }
);

export function removeCompletedApi(todos = []) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: todos.filter(item => item.isCompleted === false) }), 1000)
  );
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        name: action.payload,
        isCompleted: false,
        id: parseInt(Math.random() * (100 - 1) + 1),
      });
    },
    markAsRead: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeCompletedAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCompletedAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      });
  },
});

export const { addTodo, markAsRead } = todoSlice.actions;

export const todosList = (state) => {
  return state.todo.todos;
};

export default todoSlice.reducer;
