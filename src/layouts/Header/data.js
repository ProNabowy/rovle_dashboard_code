import { useEffect, useState } from "react";

const useDataGetter = () => {

    const [visible, setVisible] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {

        window.addEventListener('click', _ => setVisible(false));

    }, []);

    const handleOpenMnue = e => {
        setVisible(perv => !perv);
        e.stopPropagation();
    }

    return { visible, user, handleOpenMnue }

}

export {
    useDataGetter
}