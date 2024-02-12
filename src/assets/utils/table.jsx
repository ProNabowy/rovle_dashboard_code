class Table {

    constructor() {


    }

    idBodyTemplate = (rowData) => {
        return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
    };

    nameBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>
    };

    roasterNameBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.commercial_name}</p>
    };

    fullLocationBodyTemplate = (rowData) => {

        const items = ['Country', 'Provice', 'City'];

        const location = [rowData?.country?.name, rowData?.province?.name, rowData?.city?.name];

        return location?.map((item, index) => {

            return <div className='flex items-center'>

                <p className='capitalize text-[13px] opacity-70 font-medium me-2'>{items[index]}: </p>

                <p key={index} className='mb-1 capitalize text-[13px] font-medium'>{item}</p>

            </div>
        })
    };

    addressBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.address}</p>
    };

    emailBodyTemplate = (rowData) => {
        return <p className='mb-1 text-[13px] font-medium'>{rowData.email}</p>
    };

    startDateBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.created_at?.toString()}</p>
    };

    lastDateBodyTemplate = (rowData) => {
        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.updated_at}</p>
    };

    countryBodyTemplate = (rowData) => {

        return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData?.country?.name}</p>

    };


}

export default Table;