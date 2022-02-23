import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export type AppState = {
  isLoading: boolean;
  errorMessage?: string | undefined;
  isError: boolean;
  error?: Partial<Error>;
  pageTitle: string;
  darkMode: boolean | 'auto';
}


const SliceInstance: AppState = {
  isLoading: false,
  pageTitle: "Home",
  isError: false,
  errorMessage: "",
  darkMode: "auto",
}

const { reducer, actions } = createSlice({
  name: 'app',
  initialState: SliceInstance,
  reducers: {
    setDarkMode: (state, {payload}: PayloadAction<AppState['darkMode'] | undefined>) => {
      return {
        ...state,
        darkMode: typeof payload === 'undefined' ? 'auto' : payload,
      }
    },
    setIsLoading: (state, {payload}: PayloadAction<boolean | undefined>) =>{
      console.log(`Setting Is Loading State: ${payload}`);
      const amILoading = payload === true ? true : payload === false ? false : !state.isLoading;
      return {
        ...state,
        isLoading: amILoading
      }
    },
    setIsError: (state, {payload}: PayloadAction<Error | boolean | undefined>) => {
      if(typeof payload === "undefined" || payload === false) {
        return {
          ...state,
          isError: false,
          error: undefined,
          errorMessage: undefined,
        }
      }
      return {
        ...state,
        isError: true,
        errorMessage: typeof payload === "boolean" ? "An unknown error has occurred." : payload.message,
        errorObject: typeof payload === "boolean" ? new Error() : payload,
      }
    },
    setPageTitle: (state, {payload}: PayloadAction<string | undefined>) =>{
      return {
        ...state,
        pageTitle: payload ?? "Home"
      }
    }
  }
})
export default reducer

export const {
  setPageTitle,
  setIsError,
  setIsLoading

} = actions


