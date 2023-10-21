import TableActions from '../../components/TableActions/TableActions';

export const data = [
    { id: 1, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 2, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 3, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 4, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 5, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 6, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 7, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 8, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 9, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 10, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 11, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 12, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 13, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 14, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 15, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 16, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 17, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 18, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
    { id: 19, name: "South", roasterName: "Theron", recurren: "SEMANA", startDate: 'Mon Sep 04 2023 19:12:46 GMT+0300', lastDate: "Tue May 02 2023 04:03:37 GMT+0300", commercialName: "Reichel" },
];

export const idBodyTemplate = (rowData) => {
    return <h2 className='text-[#6f6b7d]'>{rowData.id}</h2>
};

export const nameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.name}</p>
};

export const roasterNameBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.roasterName}</p>

};

export const recurrenBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.recurren}</p>
};

export const startDateBodyTemplate = (rowData) => {
    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.startDate}</p>
};

export const lastDateBodyTemplate = (rowData) => {

    return <p className='mb-1 capitalize text-[13px] font-medium'>{rowData.lastDate}</p>
};

export const actionsBodyTemplate = (rowData) => {

    return <TableActions rowData={rowData}></TableActions>

};

export const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};