import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCountries } from '../state/common/action';
import { setContinent, loadMore } from '../state/common/slice';

const useCountries = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { visibleCountries, filteredCountries, continent, status, error } = useSelector(
        (state) => state.countries
    );
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCountries());
        }
    }, [status]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const continentParam = searchParams.get('continent') || 'all';
        dispatch(setContinent(continentParam));
    }, [location.search, dispatch]);

    const filterByContinent = (continent) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('continent', continent)
        window.history.pushState({}, '', `?${searchParams.toString()}`);
        dispatch(setContinent(continent));
    };

    const loadMoreCountries = () => {
        dispatch(loadMore());
    };

    return {
        visibleCountries,
        filteredCountries,
        continent,
        filterByContinent,
        loadMoreCountries,
        status,
        error,
    };
};

export default useCountries;