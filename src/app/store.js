import { configureStore } from '@reduxjs/toolkit'
import servicesReducer from '../features/services/servicesSlice'
import productsReducer from '../features/products/productsSlice'
// import postsReducer from '../features/posts/postSlice'
// import usersReducer from '../features/users/userSlice'
const store = configureStore({
  reducer: {
    services: servicesReducer,
    products: productsReducer
  }
})

export default store
