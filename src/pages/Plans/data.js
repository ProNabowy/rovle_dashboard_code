import { useContext, useEffect } from "react";
import { Plans } from "../../apis/apis";
import { SeeMore, TableActions } from "../../components";
import { AppContext } from "../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { setPlans } from "../../store/reduces/plans";
import Table from "../../assets/js/table";

const tableService = new Table();

const useDataGetter = _ => {

    const plansUtailty = new Plans();

    const plans = useSelector(store => store.plans);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        plansUtailty.fetchPlans(setPlans, dispatch).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, []);

    return { plans };

}

const roasterNameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.commercial_name}</p>

};

const sizeBodyTemplate = (rowData) => {

    const sizes = rowData?.sizes;

    const itemBodyTamplate = (item, classNames) => <p key={item.index} className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}>-{item?.size?.name} = {parseInt(item?.price)} Euro</p>;

    const renderPackages = sizes?.slice(0, 3)?.map((item, index) => {

        return itemBodyTamplate(item, 'text-center');

    });

    return (

        <div>

            {renderPackages}

            {sizes?.length > 2 && <SeeMore list={sizes} headerName="Paquetes" tamplate={itemBodyTamplate} />}

        </div>

    )

};

const statusBodyTemplate = (rowData) => {
    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.status === "active" ? "text-[#28C76F]" : "text-[#FF5C34]"}`}>{rowData.status}</p>
};

const useActionsBodyTemplate = (rowData) => {

    const plansUtailty = new Plans();
    const plans = useSelector(store => store.plans);

    return <TableActions
        path={`/products/plans/edit-plan?id=${rowData?.id}`}
        handelDeleteFunction={plansUtailty.deletePlan}
        rowData={rowData}
        editKey={'dashboard.plans.update'}
        deleteKey={'dashboard.plans.destroy'}
        PagePermissionKey={'Plans'}
        list={plans}
    ></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "name", header: "Nombre Planes", classNames: "!px-[0px]", tamplate: tableService.nameBodyTemplate },
    { field: "provider.commercial_name", header: "Nombre del Tostador", classNames: "!px-[15px]", tamplate: roasterNameBodyTemplate },
    { field: "status", header: "Estado", classNames: "!px-[15px]", tamplate: statusBodyTemplate },
    { field: "provider.commercial_name", header: "Tallas", classNames: "!px-[15px]", tamplate: sizeBodyTemplate },
    { field: "rowData.updated_at", header: "Fecha de finalización", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "action", header: "Acción", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];

export {
    columns,
    useDataGetter
}