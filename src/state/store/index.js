import { configureStore } from '@reduxjs/toolkit'
import countryReducer from '../common/slice'

export const store = configureStore({
	reducer: {
		countries: countryReducer,
		
	},
})