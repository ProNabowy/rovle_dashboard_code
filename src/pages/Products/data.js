import { useContext, useEffect } from 'react';
import { Products } from '../../apis/apis';
import { SeeMore } from '../../components';
import TableActions from '../../components/TableActions/TableActions';
import { AppContext } from '../../components/AppContext/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/reduces/products';
import Table from '../../assets/js/table';

const tableService = new Table();

const useDataGetter = _ => {

    const productsUtility = new Products();

    const products = useSelector(store => store.products);

    const dispatch = useDispatch();

    const { setIsLoading } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true); // Show the loader before making the API request

        productsUtility.fetchProducts(dispatch, setProducts).finally(() => {

            setIsLoading(false); // Hide the loader when the API request is completed

        });

    }, []);

    return { products };

}

const roastersBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.provider?.commercial_name}</p>
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

const useActionsBodyTemplate = (rowData) => {

    const products = useSelector(store => store.products);

    const productsUtility = new Products();

    return <TableActions
        path={`/products/list/edit-product?id=${rowData?.id}${rowData?.owner_name ? "?new-owner=true" : ""}`}
        disableEdit={rowData?.parent_id}
        handelDeleteFunction={productsUtility.deleteProduct}
        rowData={rowData}
        editKey={'dashboard.products.update'}
        deleteKey={'dashboard.products.destroy'}
        PagePermissionKey={'Products'}
        list={products}
    ></TableActions>

};


const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: tableService.idBodyTemplate },
    { field: "commercial_name", header: "Product Name", classNames: "!px-[0px]", tamplate: tableService.roasterNameBodyTemplate },
    { field: "provider.commercial_name", header: "Roasters", classNames: "!px-[15px]", tamplate: roastersBodyTemplate },
    { field: "commercial_name", header: "shops", classNames: "!px-[15px]", tamplate: shopsBodyTemplate },
    { field: "commercial_name", header: "Packages", classNames: "!px-[15px]", tamplate: packagesBodyTemplate },
    { field: "updated_at", header: "Last Date", classNames: "!px-[15px]", tamplate: tableService.lastDateBodyTemplate },
    { field: "auction", header: "Auction", classNames: "!px-[15px]", tamplate: useActionsBodyTemplate },
];



export {
    columns,
    useDataGetter
}

