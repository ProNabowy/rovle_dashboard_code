import React, { createContext, useEffect, useState } from 'react';
import { Get } from '../apis/apis';
import { loggedIn } from '../assets/utils/utils';
// import FetchData from '../../hooks/FetchData/FetchData';

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    const isLogin = loggedIn();

    const getUtailty = new Get();

    const [userPeressmisons, setUserPeressmisons] = useState([]);

    const [user, setUser] = useState({});

    useEffect(() => {

        if (isLogin) {

            getUtailty.getProfile().then(response => {

                setUser(response);

                const userPermissions = response?.roles[0]?.permissions?.map(item => item?.name);

                setUserPeressmisons([...userPermissions, true]);

            });
        }

    }, []);

    return (
        <AppContext.Provider
            value={{
                isLoading,
                setIsLoading,
                userPeressmisons,
                user,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };