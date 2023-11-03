import { Rosters } from '../../apis/apis';
import TableActions from '../../components/TableActions/TableActions';

const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};


const emailBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.user?.email}</p>

};

const officialNameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.official_name}</p>
};

const commercialNameBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.commercial_name}</p>
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

const stockBodyTemplate = (rowData) => {

    return <p className={`mb-1 capitalize text-[13px] font-medium ${rowData.manage_stock ? "text-[#28C76F]" : "text-[#FF5C34]"}`}>{rowData.manage_stock ? "Yes" : "No"}</p>

};
const lastDateBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>

};

const actionsBodyTemplate = (rowData) => {

    const roastersUtility = new Rosters();
console.log(rowData)
    return <TableActions path={`/groups/roasters/edit-roaster?id=${rowData?.id}`} handelDeleteFunction={roastersUtility.deleteRoaster} rowData={rowData}></TableActions>

};

const columns = [
    { field: "id", header: "ID", tamplate: idBodyTemplate },
    { field: "officialName", header: "Official Name", tamplate: officialNameBodyTemplate },
    { field: "officialName", header: "Control of the stock", tamplate: stockBodyTemplate },
    { field: "commercialName", header: "Commercial Name", tamplate: commercialNameBodyTemplate },
    { field: "email", header: "Email", tamplate: emailBodyTemplate },
    { field: "location", header: "Locations", tamplate: locationBodyTemplate },
    { field: "lastDate", header: "Last Date", tamplate: lastDateBodyTemplate },
    { field: "status", header: "Action", tamplate: actionsBodyTemplate },
];

export {
    columns
}