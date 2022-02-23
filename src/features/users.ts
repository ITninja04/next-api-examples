import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/TYPES/user';
import { placeHolderApi } from '@/features/api';


export type UsersState = {
  users: User[];
  hasUsers: boolean;
}


const SliceInstance: UsersState = {
  hasUsers: false,
  users: [],
}

const { reducer, actions } = createSlice({
  name: 'users',
  initialState: SliceInstance,
  reducers: {
    setUsers: (state, {payload}: PayloadAction<User[]>) => {
      return {
        ...state,
        users: payload,
        hasUsers: true,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      placeHolderApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }: PayloadAction<User[]>) => {
        state.users = payload;
        state.hasUsers = payload.length > 0;
      }
    )
  }
})
export default reducer

export const {
  setUsers
} = actions






