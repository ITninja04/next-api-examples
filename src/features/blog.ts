import {faker} from "@faker-js/faker";
import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Fuse from 'fuse.js'
import { AppDispatch, AppThunk, RootState } from '../store';
import { Post } from '@/TYPES/post';
import { CommandPaletteProps } from '@/components/CommandPalette';
import { placeHolderApi } from '@/features/api';
import { AppState } from '@/features/app';



export const searchForPost = (text: string): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState();
  const options: Fuse.IFuseOptions<Post> = {
    isCaseSensitive: false,
    findAllMatches: false,
    useExtendedSearch: true,
    includeMatches: true,
    includeScore: true,
    keys: ['body', 'title']
  }
  if(state.blog?.allPosts) {
    const searcher = new Fuse(state.blog.allPosts as [], options)
    const results = searcher.search(text ?? '');
    dispatch(searchResults({results: results.map((e) => e.item), searchQuery: text}));
  }
}



export type BlogState = {
  allPosts: Post[];
  filteredView: Post[] | undefined;
  currentPage: number;
  cmdPalletOpen: boolean,
  selectedPost: number,
  searchQuery: string | undefined,
}




export const BlogSliceDefaults: BlogState = {
  allPosts: [],
  filteredView: undefined,
  currentPage: 1,
  selectedPost: 0,
  searchQuery: undefined,
  cmdPalletOpen: false,
}


const {reducer, actions} = createSlice({
  name: "blog",
  initialState: BlogSliceDefaults,
  reducers: {
    searchResults: (state,  { payload }: PayloadAction<{results: Post[],searchQuery: string }>) => {
      if(payload) {
        return {
          allPosts: state.allPosts,
          filteredView: state.filteredView,
          currentPage: state.currentPage,
          selectedPost: state.selectedPost,
          cmdPalletOpen: state.cmdPalletOpen,
          searchQuery: payload.searchQuery,
        }
      }
    },

    toggleCommandPalette: (state, {payload}: PayloadAction<boolean | undefined>) => {
      return {
        ...state,
        cmdPalletOpen: typeof payload === "undefined" ? false : payload
      }
    }
   },
extraReducers: (builder) => {
  builder.addMatcher(placeHolderApi.endpoints.getPosts.matchFulfilled, (state, args) => {
    const {} = args;

  });
}
});

export default reducer;

export const {
  searchResults,
  toggleCommandPalette
} = actions;
