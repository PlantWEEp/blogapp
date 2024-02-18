import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../store/features/authSlice'

export const store = configureStore({
    reducer:{
        auth:authSlice
    }
})