import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleCompleteTodo: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((todo) => todo.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, toggleCompleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
