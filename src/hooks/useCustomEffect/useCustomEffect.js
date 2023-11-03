import { useEffect, useState } from "react";

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


const useTableEntries = (list) => {

    const [selectedEntries, setSelectedEntries] = useState({ name: 5, code: 5 });

    const entries = [];

    // Fetch Entries 
    list?.map((item, index) => entries.push({ name: index + 1, code: index + 1 }));

    return { selectedEntries, setSelectedEntries, entries };
}

export default function useCustomEffect() {
    return { useReplacePagnitToText, useTableEntries }
}