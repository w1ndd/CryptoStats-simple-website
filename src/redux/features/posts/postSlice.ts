// import { AsyncThunk, createAsyncThunk, createSlice, SerializedError, PayloadAction }  from "@reduxjs/toolkit"
// import axios, { AxiosResponse}  from "axios"

// type Post = {
//     id: number,
//     title: string,
//     text: string,
//     date: string,
// }

// export interface PostState {
//     posts: Post[],
//     isLoading: boolean,
//     error: null | SerializedError
// }

// const initialState: PostState = {
//     posts: [],
//     isLoading: false,
//     error: null,
// }

// // cd api => json-server --watch db.json

// export const httpCommon = axios.create({
//     baseURL: "http://localhost:3000/",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });

// export const getPosts = createAsyncThunk("posts/getAll", async (_, thunkAPI) => {
//     try{
//         return await httpCommon.get<Post[]>("posts").then(res => res.data)
//     } catch(e: any) {
//         return thunkAPI.rejectWithValue(e as SerializedError)
//     }
// })

// const postSlice = createSlice({
//     name: "posts",
//     initialState,
//     reducers: {},
//     extraReducers: builder => {
//         builder.addCase(getPosts.pending, (state) => {
//             state.isLoading = true;
//         })
//         builder.addCase(getPosts.fulfilled, (state, action) => {
//             state.posts = action.payload
//             state.isLoading = false;
//         })
//         builder.addCase(getPosts.rejected, (state, action) => {
//             state.isLoading = false;
//             state.error = action.payload as SerializedError;
//         })
//     }
// });

// export default postSlice.reducer;

import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  SerializedError,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export type Post = {
  id: number;
  title: string;
  text: string;
  date: string;
};

export interface PostState {
  posts: Post[];
  post: null | Post;
  isLoading: boolean;
  error: null | SerializedError;
}

const initialState: PostState = {
  posts: [],
  post: null,
  isLoading: false,
  error: null,
};

// cd api => json-server --watch db.json

export const httpCommon = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getPosts: AsyncThunk<
  Post[],
  undefined,
  { rejectValue: SerializedError }
> = createAsyncThunk<Post[], undefined, { rejectValue: SerializedError }>(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      return await httpCommon.get("posts").then((res) => res.data);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e as SerializedError);
    }
  }
);

export const getPost: AsyncThunk<
  Post,
  number,
  { rejectValue: SerializedError }
> = createAsyncThunk<Post, number, { rejectValue: SerializedError }>(
  "posts/getOne",
  async (id, thunkAPI) => {
    try {
      return await httpCommon.get(`posts/${id}`).then((res) => res.data);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e as SerializedError);
    }
  }
);

export const deletePost: AsyncThunk<
  number,
  number,
  { rejectValue: SerializedError }
> = createAsyncThunk<number, number, { rejectValue: SerializedError }>(
  "posts/delete",
  async (id, thunkAPI): Promise<number> => {
    try {
      await httpCommon.delete(`posts/${id}`);
      return id;
    } catch (e: any) {
      throw thunkAPI.rejectWithValue(e as SerializedError);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getPosts
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as SerializedError;
    });

    //deletePost
    builder.addCase(deletePost.pending, (state) => {
      //state.isLoading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      //var deletedIndex = -1;
      for (var i: number = 0; i < state.posts.length; i++) {
        if (state.posts[i].id === action.payload) {
          //deletedIndex = i;
          break;
        }
      }

      //state.posts = [...state.posts.slice(0,deletedIndex), ...state.posts.slice(deletedIndex + 1)]

      state.posts = state.posts.filter((post) => post.id !== action.payload);
      state.isLoading = false;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as SerializedError;
    });

    //getPost
    builder.addCase(getPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as SerializedError;
    });
  },
});

export default postSlice.reducer;
