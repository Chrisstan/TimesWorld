import { createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from './action';

export const countrySlice = createSlice({
    name: 'countrySlice',
    initialState: {
        countries: [],
        filteredCountries: [],
        visibleCountries: [],
        continent: 'all', 
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
        itemsPerPage: 12,
    },
    reducers: {
        setContinent: (state, action) => {
            state.continent = action.payload;
            state.filteredCountries =
                action.payload === 'all'
                    ? state.countries
                    : state.countries.filter((country) => country.region.toLowerCase() === action.payload);
            state.visibleCountries = state.filteredCountries.slice(0, state.itemsPerPage);
        },
        loadMore: (state) => {
            const currentLength = state.visibleCountries.length;
            const nextCountries = state.filteredCountries.slice(
                currentLength,
                currentLength + state.itemsPerPage
            );
            state.visibleCountries = [...state.visibleCountries, ...nextCountries];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.countries = action.payload;
                state.filteredCountries =
                    state.continent === 'all'
                        ? action.payload
                        : action.payload.filter((country) => country.region.toLowerCase() === state.continent);
                state.visibleCountries = state.filteredCountries.slice(0, state.itemsPerPage);
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setContinent, loadMore } = countrySlice.actions;

export default countrySlice.reducer;