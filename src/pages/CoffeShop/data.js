import { CoffeeShops } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';


const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>
};

const postCodeBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.post_code}</p>

};

const addressBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.address}</p>
};

const locationBodyTemplate = (rowData) => {
    const items = ['Country', 'Provice', 'City'];
    const location = [rowData?.country?.name, rowData?.province?.name, rowData?.city?.name];
    return location?.map((item, index) => {
        return <div className='flex items-center'>
            <p className='capitalize text-[13px] opacity-70 font-medium me-2'>{items[index]}: </p>
            <p key={index} className='mb-1 capitalize text-[13px] font-medium'>{item}</p>

        </div>
    })
};

const lastDateBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

const actionsBodyTemplate = (rowData) => {

    const coffeeUtility = new CoffeeShops();

    return <TableActions handelDeleteFunction={coffeeUtility.deleteCoffee} rowData={rowData}></TableActions>

};

const columns = [
    { field: "id", header: "ID", classNames: "!px-[15px]", tamplate: idBodyTemplate },
    { field: "name", header: "Name", classNames: "!px-[0px]", tamplate: nameBodyTemplate },
    { field: "postCode", header: "Post Code", classNames: "!px-[15px]", tamplate: postCodeBodyTemplate },
    { field: "address", header: "Address", classNames: "!px-[15px]", tamplate: addressBodyTemplate },
    { field: "location", header: "location", classNames: "!px-[15px]", tamplate: locationBodyTemplate },
    { field: "lastDate", header: "Last Date", classNames: "!px-[15px]", tamplate: lastDateBodyTemplate },
    { field: "status", header: "Action", classNames: "!px-[15px]", tamplate: actionsBodyTemplate },
];


export {
    columns
}