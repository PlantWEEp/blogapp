import {configureStore} from '@reduxjs/toolkit'
import userAuth from '../store/features/authSlice'

const store = configureStore({
    reducer: {
      auth: userAuth, 
    },
  });
export { store};