import { Plans } from "../../apis/apis";
import { SeeMore, TableActions } from "../../components";

export const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

export const roasterNameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.user?.name}</p>
};

export const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.name}</p>

};

export const lastDateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};
export const sizeBodyTemplate = (rowData) => {

    const sizes = rowData?.presentations;

    const itemBodyTamplate = (item, classNames) => <p key={item.index} className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}>{parseInt(item?.weight)} gm = {parseInt(item?.price)} Euro</p>;


    const renderPackages = sizes?.map((item, index) => {

        return itemBodyTamplate(item, 'text-center');

    });


    return (

        <div>

            {renderPackages}

            {sizes?.length > 2 && <SeeMore list={sizes} headerName="Packages" tamplate={itemBodyTamplate} />}

        </div>

    )

};

export const statusBodyTemplate = (rowData) => {
    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.status === "active" ? "text-[#28C76F]" : "text-[#FF5C34]"}`}>{rowData.status ? "Active" : "Disactive"}</p>
};

export const actionsBodyTemplate = (rowData) => {

    const plansUtailty = new Plans();

    return <TableActions handelDeleteFunction={plansUtailty.deletePlan} rowData={rowData}></TableActions>

};
