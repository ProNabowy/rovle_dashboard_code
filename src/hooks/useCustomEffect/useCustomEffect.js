import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useReplacePagnitToText = () => {
    useEffect(() => {

        const perv = document.querySelector('.p-paginator-prev');
        const next = document.querySelector('.p-paginator-next');

        if (perv) {

            perv.innerHTML = "Previous";
        }

        if (next) {
            next.innerHTML = "Next";
        }

    }, []);
}


const useNavigateToLogin = (isLoging) => {
    const locition = useLocation().pathname;
    const navigate = useNavigate();

    useEffect(() => {

        if (!isLoging) {

            navigate('/login');

        }

    }, [locition]);
}

export default function useCustomEffect() {
    return { useReplacePagnitToText, useNavigateToLogin }
}