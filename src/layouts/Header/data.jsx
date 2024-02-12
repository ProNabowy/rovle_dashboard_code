import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";

const useDataGetter = () => {

    const [visible, setVisible] = useState(false);

    const { user } = useContext(AppContext);

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