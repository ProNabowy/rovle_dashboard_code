import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Swal } from "../../apis/data";
import { useNavigate } from "react-router-dom";

const useDataGetter = () => {

    const rosters = useSelector(store => store.rosters);

    const [selectedRosters, setselectedRosters] = useState(JSON.parse(sessionStorage.getItem('selected-roaster')));

    const navigate = useNavigate();

    useEffect(() => {

        selectedRosters?.id && sessionStorage.setItem('selected-roaster', JSON.stringify(selectedRosters))

    }, [selectedRosters?.id]);

    const handleShowButton = () => {

        return (!selectedRosters?.id) ? Swal.warning('Warning', `Please Select Roaster`) : navigate('/products/plans/size/list');

    }

    return {
        handleShowButton,
        selectedRosters,
        setselectedRosters,
        rosters,
    };
}


export {
    useDataGetter
}