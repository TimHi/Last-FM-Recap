import { PayloadAction, createSlice } from '@reduxjs/toolkit'


interface UserState {
    name: string
}

const initialState = { name: "" } as UserState


export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
})

export const { setName } = userSlice.actions;
export default userSlice.reducer