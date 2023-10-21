import { SeeMore } from "../../components";

const addressBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.user?.name}</p>

};

const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.user?.name}</p>

};

const startDateteBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.created_at}</p>
};

const endDateteBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const statusBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.status}</p>
};

const packageBodyTemplate = (rowData) => {

    const packages = rowData?.presentations;

    const itemBodyTamplate = (item, classNames) => <p key={item.index} className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}>{parseInt(item?.weight)} gm = {parseInt(item?.price)} Euro</p>;


    const renderPackages = packages?.map((item, index) => {

        return itemBodyTamplate(item, 'text-center');

    });


    return (

        <div>

            {renderPackages}

            {packages?.length > 2 && <SeeMore list={packages} headerName="Packages" tamplate={itemBodyTamplate} />}

        </div>

    )

};


export {
    addressBodyTemplate,
    nameBodyTemplate,
    endDateteBodyTemplate,
    startDateteBodyTemplate,
    statusBodyTemplate,
    packageBodyTemplate
}