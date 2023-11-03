import { useContext, useEffect, useState } from "react";
import { Plans } from "../../apis/apis";
import { SeeMore, TableActions } from "../../components";
import useCustomEffect from "../../hooks/useCustomEffect/useCustomEffect";
import { AppContext } from "../../components/AppContext/AppContext";

const useDataGetter = _ => {

    const plansUtailty = new Plans();

    const [data, setData] = useState([]);

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(data);

    useReplacePagnitToText();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        plansUtailty.fetchPlans(setData, true).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, []);

    return { selectedEntries, setSelectedEntries, entries, data };

}

const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

const roasterNameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.user?.name}</p>
};

const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.name}</p>

};

const lastDateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const sizeBodyTemplate = (rowData) => {

    const sizes = rowData?.presentations;

    const itemBodyTamplate = (item, classNames) => <p key={item.index} className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}>{parseInt(item?.weight)} gm = {parseInt(item?.price)} Euro</p>;

    const renderPackages = sizes?.slice(0, 3)?.map((item, index) => {

        return itemBodyTamplate(item, 'text-center');

    });

    return (

        <div>

            {renderPackages}

            {sizes?.length > 2 && <SeeMore list={sizes} headerName="Packages" tamplate={itemBodyTamplate} />}

        </div>

    )

};

const statusBodyTemplate = (rowData) => {
    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.status === "active" ? "text-[#28C76F]" : "text-[#FF5C34]"}`}>{rowData.status}</p>
};

const actionsBodyTemplate = (rowData) => {

    const plansUtailty = new Plans();

    return <TableActions path={`/products/plans/edit-plan?id=${rowData?.id}`} handelDeleteFunction={plansUtailty.deletePlan} rowData={rowData}></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: idBodyTemplate },
    { field: "name", header: "Plan Name", classNames: "!px-[0px]", tamplate: nameBodyTemplate },
    { field: "roaster-name", header: "Roaster Name", classNames: "!px-[15px]", tamplate: roasterNameBodyTemplate },
    { field: "status", header: "Status", classNames: "!px-[15px]", tamplate: statusBodyTemplate },
    { field: "size", header: "Sizes", classNames: "!px-[15px]", tamplate: sizeBodyTemplate },
    { field: "last-date", header: "Last Date", classNames: "!px-[15px]", tamplate: lastDateBodyTemplate },
    { field: "action", header: "Action", classNames: "!px-[15px]", tamplate: actionsBodyTemplate },
];

export {
    columns,
    useDataGetter
}