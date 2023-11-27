import React, { createContext, useState } from 'react';
import FetchData from '../../hooks/FetchData/FetchData';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    const { useFetchGloableData } = FetchData();

    useFetchGloableData(setIsLoading);

    return (
        <AppContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };