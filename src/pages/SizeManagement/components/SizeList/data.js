import { useSelector } from "react-redux";
import { Size } from "../../../../apis/apis";
import { TableActions } from "../../../../components";
import { useContext, useEffect, useState } from "react";
import { useCustomEffect } from "../../../../hooks";
import { AppContext } from "../../../../components/AppContext/AppContext";

const useDataGetter = _ => {

    const rosters = useSelector(store => store.rosters);

    const [selectedRosters, setselectedRosters] = useState(JSON.parse(sessionStorage.getItem('selected-roaster')));

    const sizeUtility = new Size();

    const [data, setData] = useState([]);

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        selectedRosters?.id && sizeUtility.fetchSizeByProvider(setData, selectedRosters?.id, true).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, [selectedRosters?.id]);

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(data);

    useReplacePagnitToText();


    return { rosters, selectedRosters, setselectedRosters, selectedEntries, entries, setSelectedEntries, data };

}

const weightBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.weight}</p>

};

const idBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.id}</p>

};
const characterBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.name}</p>

};

const dateateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const actionsBodyTemplate = (rowData) => {

    const sizeUtility = new Size();

    return <TableActions disableEdit={true} handelDeleteFunction={sizeUtility.deleteSize} rowData={rowData}></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: idBodyTemplate },
    { field: "character", header: "Character", classNames: "!px-[0px]", tamplate: characterBodyTemplate },
    { field: "weight", header: "Weight", classNames: "!px-[15px]", tamplate: weightBodyTemplate },
    { field: "date", header: "Date", classNames: "!px-[15px]", tamplate: dateateBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: actionsBodyTemplate },
];


export {
    columns,
    useDataGetter
}
