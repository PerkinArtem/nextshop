import { categoryApi } from './category/category.api';
import { productApi } from './product/product.api';
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cart.slice'

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    cart: cartReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware).concat(categoryApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TypeRootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TypeAppDispatch = typeof store.dispatch
