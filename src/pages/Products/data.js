import { useContext, useEffect, useState } from 'react';
import { Products } from '../../apis/apis';
import { SeeMore } from '../../components';
import TableActions from '../../components/TableActions/TableActions';
import { useCustomEffect } from '../../hooks';
import { AppContext } from '../../components/AppContext/AppContext';

const useDataGetter = _ => {

    const [products, setProducts] = useState([]);

    const productsUtility = new Products();

    const { useReplacePagnitToText, useTableEntries } = useCustomEffect();

    const { selectedEntries, setSelectedEntries, entries } = useTableEntries(products);

    useReplacePagnitToText();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        productsUtility.fetchProducts(setProducts, true).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, []);

    return { selectedEntries, setSelectedEntries, entries, products };

}

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

    const shops = rowData?.coffee_shops;

    const itemBodyTamplate = (item, classNames) => <p key={item.index} className={`capitalize text-[13px] font-medium mb-1 rounded-[5px] text-[#58291E] ${classNames}`}>{item?.name}</p>;


    const renderShops = shops?.slice(0, 3)?.map((item, index) => {

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


    const renderPackages = packages?.slice(0, 3)?.map((item, index) => {

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

const actionsBodyTemplate = (rowData) => {

    const productsUtility = new Products();

    return <TableActions path={`/products/list/edit-product?id=${rowData?.id}`} handelDeleteFunction={productsUtility.deleteProduct} rowData={rowData}></TableActions>

};


const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: idBodyTemplate },
    { field: "name", header: "Product Name", classNames: "!px-[0px]", tamplate: nameBodyTemplate },
    { field: "roasters", header: "Roasters", classNames: "!px-[15px]", tamplate: roastersBodyTemplate },
    { field: "shops", header: "shops", classNames: "!px-[15px]", tamplate: shopsBodyTemplate },
    { field: "packages", header: "Packages", classNames: "!px-[15px]", tamplate: packagesBodyTemplate },
    { field: "updated_at", header: "Last Date", classNames: "!px-[15px]", tamplate: updated_at_BodyTemplate },
    { field: "auction", header: "Auction", classNames: "!px-[15px]", tamplate: actionsBodyTemplate },
];



export {
    columns,
    useDataGetter
}

