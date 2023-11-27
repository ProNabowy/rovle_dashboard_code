import { useDispatch, useSelector } from "react-redux";
import { Size } from "../../../../apis/apis";
import { TableActions } from "../../../../components";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../components/AppContext/AppContext";
import { setSizes } from "../../../../store/reduces/sizes";
import Table from "../../../../assets/js/table";


const tableService = new Table();

const useDataGetter = _ => {

    const rosters = useSelector(store => store.rosters);

    const [selectedRosters, setselectedRosters] = useState(JSON.parse(sessionStorage.getItem('selected-roaster')));

    const sizeUtility = new Size();

    const sizes = useSelector(store => store.sizes);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        selectedRosters?.id && sizeUtility.fetchSizeByProvider(setSizes, selectedRosters?.id, dispatch).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, [selectedRosters?.id]);


    return { rosters, selectedRosters, setselectedRosters, sizes };

}

const weightBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.weight}</p>

};

const useActionsBodyTemplate = (rowData) => {

    const sizeUtility = new Size();

    const sizes = useSelector(store => store.sizes);

    return <TableActions
        disableEdit={true}
        handelDeleteFunction={sizeUtility.deleteSize}
        rowData={rowData}
        deleteKey={'dashboard.sizes.destroy'}
        PagePermissionKey={'Sizes'}
        list={sizes}
    ></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Character", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "weight", header: "Weight", classNames: "!px-[15px]", tamplate: weightBodyTemplate },
    { field: "updated_at", header: "Date", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];


export {
    columns,
    useDataGetter
}
