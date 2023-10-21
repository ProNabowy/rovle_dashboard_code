import { Products } from '../../apis/apis';
import { SeeMore } from '../../components';
import TableActions from '../../components/TableActions/TableActions';

const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.trade_name?.slice(0, 50)}</p>
};


const roastersBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.user?.name}</p>
};

const shopsBodyTemplate = (rowData) => {

    const shops = rowData?.shops;

    const itemBodyTamplate = (item, classNames) => <p key={item.index} className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}>{parseInt(item?.weight)} gm = {parseInt(item?.price)} Euro</p>;


    const renderShops = shops?.map((item, index) => {

        return itemBodyTamplate(item, 'text-center');

    });


    return (

        <div>

            {renderShops}

            {shops?.length > 2 && <SeeMore list={shops} headerName="Packages" tamplate={itemBodyTamplate} />}

        </div>

    )
};

const packagesBodyTemplate = (rowData) => {

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

const updated_at_BodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const lastDateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.lastDate}</p>
};

const actionsBodyTemplate = (rowData) => {

    const productsUtility = new Products();

    return <TableActions handelDeleteFunction={productsUtility.deleteProduct} rowData={rowData}></TableActions>

};


export {
    idBodyTemplate,
    nameBodyTemplate,
    roastersBodyTemplate,
    shopsBodyTemplate,
    packagesBodyTemplate,
    updated_at_BodyTemplate,
    lastDateBodyTemplate,
    actionsBodyTemplate
}