import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
    const response = await fetch('https://restcountries.com/v2/all?fields=name,region,flag');
    const data = await response.json();
    return data;
});