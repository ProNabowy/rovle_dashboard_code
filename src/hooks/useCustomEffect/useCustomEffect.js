import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useReplacePagnitToText = () => {

    useEffect(() => {

        const perv = document.querySelector('.p-paginator-prev');
        const next = document.querySelector('.p-paginator-next');

        if (perv) {

            perv.innerHTML = "Anterior";

        }

        if (next) {

            next.innerHTML = "Siguiente";

        }

    }, []);

}

// Replace The Default Icon For All Of The Routes cuz the title tag only applay for the root route
const useSetTitleIcon = () => {

    const location = useLocation().pathname;

    useEffect(() => {

        // <title> tag in index.html file is only applied to the root route
        const headIcon = document.createElement('link');

        headIcon.setAttribute('rel', 'icon');
        headIcon.setAttribute('href', require('../../assets/images/head-logo.png'));
        document.head.appendChild(headIcon);


    }, [location]);
}


const useTableEntries = (list) => {

    const [selectedEntries, setSelectedEntries] = useState({ name: 5, code: 5 });

    const entries = [];

    // Fetch Entries 
    list?.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));

    return { selectedEntries, setSelectedEntries, entries };
}

export default function useCustomEffect() {
    return { useReplacePagnitToText, useTableEntries, useSetTitleIcon }
}