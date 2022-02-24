import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_COSTS_STATE, INITIAL_QUESTIONS_STATE } from "./state";

const costsSlice = createSlice({
  name: "costs",
  initialState: INITIAL_COSTS_STATE,
  reducers: {
    select: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity !== 0 ? 0 : 1,
          selected: item.selected !== false ? false : true,
        };
      });
    },
  },
});

const questionsSlice = createSlice({
  name: "questions",
  initialState: INITIAL_QUESTIONS_STATE,
  reducers: {
    answer: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          answer: action.payload.answer,
        };
      });
    },
  },
});


const store = configureStore({ reducer: costsSlice.reducer });

export const { select } = costsSlice.actions;
export const { answer } = questionsSlice.actions;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { costsSlice, questionsSlice, store };
