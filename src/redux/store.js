import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import  blogSlice  from './features/blogSlice';
import freelancersSlice from './features/freelancersSlice';
// import AuthProvider from '../hooks/useFirebase';

export const store = configureStore({
  reducer: {
    products:productSlice,
    blogs:blogSlice,
    freelancers:freelancersSlice
    // auth:AuthProvider(),
  },
})