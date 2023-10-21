import { CoffeeShops } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';


export const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

export const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>
};

export const postCodeBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.post_code}</p>

};

export const addressBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.address}</p>
};

export const locationBodyTemplate = (rowData) => {
    const items = ['Country', 'Provice', 'City'];
    const location = [rowData?.country?.name, rowData?.province?.name, rowData?.city?.name];
    return location?.map((item, index) => {
        return <div className='flex items-center'>
            <p className='capitalize text-[13px] opacity-70 font-medium me-2'>{items[index]}: </p>
            <p key={index} className='mb-1 capitalize text-[13px] font-medium'>{item}</p>

        </div>
    })
};

export const lastDateBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
};

export const actionsBodyTemplate = (rowData) => {

    const coffeeUtility = new CoffeeShops();

    return <TableActions handelDeleteFunction={coffeeUtility.deleteCoffee} rowData={rowData}></TableActions>


};
